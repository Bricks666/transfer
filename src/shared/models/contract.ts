import { createQuery } from '@farfetched/core';
import {
	RouteInstance,
	RouteParams,
	RouteParamsAndQuery,
	chainRoute
} from 'atomic-router';
import { Event, createDomain, createEvent, sample } from 'effector';
import { equals } from 'patronum';
import { coreApi } from '../api';
import type { ChainRouteOptions, ExtractValueType } from '../types';

const contractDomain = createDomain();

const handlerFx = contractDomain.effect(coreApi.initContract);

const STATUSES = {
	INIT: 'init',
	PENDING: 'pending',
	ERROR: 'error',
	INITIATED: 'initiated',
} as const;

type Status = ExtractValueType<typeof STATUSES>;

export const query = createQuery({ effect: handlerFx, });
export const $status = contractDomain.store<Status>(STATUSES.INIT);

sample({
	clock: query.start,
	fn: () => STATUSES.PENDING,
	target: $status,
});

sample({
	clock: query.finished.success,
	fn: () => STATUSES.INITIATED,
	target: $status,
});

sample({
	clock: query.finished.failure,
	fn: () => STATUSES.ERROR,
	target: $status,
});

export const chainContractInitiated = <Params extends RouteParams>(
	route: RouteInstance<Params>,
	options: ChainRouteOptions<Params> = {}
): RouteInstance<Params> => {
	const startChecking = createEvent<RouteParamsAndQuery<Params>>();

	const alreadyInitiated = createEvent<RouteParamsAndQuery<Params>>();
	const alreadyError = createEvent<RouteParamsAndQuery<Params>>();
	const initiatedSuccess = createEvent<RouteParamsAndQuery<Params>>();
	const initiatedFailure = createEvent<RouteParamsAndQuery<Params>>();

	sample({
		clock: startChecking,
		filter: equals($status, STATUSES.INIT),
		target: query.start,
	});

	sample({
		clock: startChecking,
		filter: equals($status, STATUSES.INITIATED),
		target: alreadyInitiated,
	});

	sample({
		clock: startChecking,
		filter: equals($status, STATUSES.ERROR),
		target: alreadyError,
	});

	sample({
		clock: [query.finished.success, alreadyInitiated],
		source: { params: route.$params, query: route.$query, },
		target: initiatedSuccess,
	});

	sample({
		clock: [query.finished.failure, alreadyError],
		source: { params: route.$params, query: route.$query, },
		target: initiatedFailure,
	});

	if (options.otherwise) {
		sample({
			clock: initiatedFailure,
			target: options.otherwise as Event<RouteParamsAndQuery<Params>>,
		});
	}

	return chainRoute({
		route,
		beforeOpen: startChecking,
		openOn: initiatedSuccess,
		cancelOn: initiatedFailure,
	});
};
