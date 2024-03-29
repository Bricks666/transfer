import {
	type RouteInstance,
	type RouteParams,
	type RouteParamsAndQuery,
	chainRoute
} from 'atomic-router';
import {
	type Effect,
	type Event,
	type Store,
	attach,
	createDomain,
	createEvent,
	sample
} from 'effector';
import { equals } from 'patronum';
import type { Address } from 'web3';
import {
	type ChainRouteOptions,
	type ExtractValueType,
	Roles
} from '@/shared/types';

const authDomain = createDomain();

const STATUSES = {
	ANONYMOUS: 'anonymous',
	AUTHORIZED: 'authorized',
} as const;

type Status = ExtractValueType<typeof STATUSES>;

export interface AuthUser {
	readonly address: Address;
	readonly role: Roles;
}

export const $status = authDomain.store<Status>(STATUSES.ANONYMOUS);
export const $isAuth = equals($status, STATUSES.AUTHORIZED);
export const $user = authDomain.store<AuthUser | null>(null);
export const $isAdmin = $user.map((user) => user?.role === Roles.admin);

sample({
	clock: $user,
	filter: Boolean,
	fn: () => STATUSES.AUTHORIZED,
	target: $status,
});

sample({
	clock: $user,
	filter: (user) => !user,
	fn: () => STATUSES.ANONYMOUS,
	target: $status,
});

export const chainAuthorized = <Params extends RouteParams>(
	route: RouteInstance<Params>,
	options: ChainRouteOptions = {}
): RouteInstance<Params> => {
	const startChecking = createEvent<RouteParamsAndQuery<Params>>();
	const alreadyAuthorized = createEvent<RouteParamsAndQuery<Params>>();
	const alreadyAnonymous = createEvent<RouteParamsAndQuery<Params>>();

	sample({
		clock: $user,
		source: { params: route.$params, query: route.$query, },
		target: startChecking,
	});

	sample({
		clock: startChecking,
		filter: equals($status, STATUSES.AUTHORIZED),
		target: alreadyAuthorized,
	});

	sample({
		clock: startChecking,
		filter: equals($status, STATUSES.ANONYMOUS),
		target: alreadyAnonymous,
	});

	if (options.otherwise) {
		sample({
			clock: alreadyAnonymous,
			fn: () => undefined,
			target: options.otherwise as Event<void>,
		});
	}

	return chainRoute({
		route,
		beforeOpen: startChecking,
		openOn: alreadyAuthorized,
		cancelOn: alreadyAnonymous,
	});
};

export const chainAnonymous = <Params extends RouteParams>(
	route: RouteInstance<Params>,
	options: ChainRouteOptions = {}
): RouteInstance<Params> => {
	const startChecking = createEvent<RouteParamsAndQuery<Params>>();
	const alreadyAuthorized = createEvent<RouteParamsAndQuery<Params>>();
	const alreadyAnonymous = createEvent<RouteParamsAndQuery<Params>>();

	// For dynamic redirect after change user
	sample({
		clock: $user,
		source: { params: route.$params, query: route.$query, },
		target: startChecking,
	});

	sample({
		clock: startChecking,
		filter: equals($status, STATUSES.ANONYMOUS),
		target: alreadyAnonymous,
	});

	sample({
		clock: startChecking,
		filter: equals($status, STATUSES.AUTHORIZED),
		target: alreadyAuthorized,
	});

	if (options.otherwise) {
		sample({
			clock: alreadyAuthorized,
			fn: () => undefined,
			target: options.otherwise as Event<void>,
		});
	}

	return chainRoute({
		route,
		beforeOpen: startChecking,
		openOn: alreadyAnonymous,
		cancelOn: alreadyAuthorized,
	});
};

export interface WithSender {
	readonly sender: Address;
}

export const attachWithSender = <Params extends WithSender, Done, Fail = Error>(
	effect: Effect<Params, Done, Fail>
) => {
	return attach<
		Omit<Params, keyof WithSender>,
		Store<AuthUser | null>,
		Effect<Params, Done, Fail>
	>({
		source: $user,
		effect,
		mapParams: (params, user) => {
			return {
				...params,
				sender: user?.address ?? '',
			} as Params;
		},
	});
};
