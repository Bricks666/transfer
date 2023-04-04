import { combine, createDomain, sample } from 'effector';
import { Address, Roles } from '@/shared/types';

const authDomain = createDomain();

export const $address = authDomain.store<Address | null>(null);
export const $role = authDomain.store<Roles>(Roles.user);
export const $isAuth = $address.map(Boolean);
export const $user = combine({ login: $address, role: $role, });
export const $isAdmin = $role.map((role) => role === Roles.admin);

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
