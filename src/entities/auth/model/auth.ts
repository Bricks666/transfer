import { attach, combine, createDomain, Effect, sample, Store } from 'effector';
import { Address, Roles } from '@/shared/types';

const authDomain = createDomain();

export const $address = authDomain.store<Address | null>(null);
export const $role = authDomain.store<Roles>(Roles.user);
export const $isAuth = combine($address, Boolean);
export const $user = combine({ login: $address, role: $role, });

export const setAddress = authDomain.event<string | null>();
export const setRole = authDomain.event<Roles>();

sample({
	clock: setAddress,
	target: $address,
});

sample({
	clock: setRole,
	target: $role,
});

export interface WithSender {
	readonly sender: Address;
}

export const attachWithSender = <Params extends WithSender, Done, Fail = Error>(
	effect: Effect<Params, Done, Fail>
) => {
	return attach<
		Omit<Params, keyof WithSender>,
		Store<Address | null>,
		Effect<Params, Done, Fail>
	>({
		source: $address,
		effect,
		mapParams: (params, address) =>
			({
				...params,
				sender: address ?? '',
			} as Params),
	});
};
