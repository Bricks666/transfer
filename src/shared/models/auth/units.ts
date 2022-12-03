import { combine, createDomain } from 'effector-logger';
import { createMutation } from '@farfetched/core';
import { AuthParams } from '@/shared/api/auth';
import { Address, Roles } from '@/shared/types';
import { Auth } from './types';

const domain = createDomain();

export const $address = domain.store<Address | null>(null);
export const $role = domain.store<Roles | null>(null);
export const $balance = domain.store<string>('0');
export const $isAuth = combine($address, (address) => !!address);
export const $user = combine<Address | null, Roles | null, Auth | null>(
	$address,
	$role,
	(login, role) => {
		if (login === null || role === null) {
			return null;
		}

		return {
			login,
			role,
		};
	}
);

export const loginFx = domain.effect<AuthParams, Auth>();
export const registrationFx = domain.effect<AuthParams, unknown>();
export const logoutFx = domain.effect();
export const fetchBalanceFx = domain.effect<Address, string>();

export const loginMutation = createMutation({
	effect: loginFx,
});
export const registrationMutation = createMutation({
	effect: registrationFx,
});
