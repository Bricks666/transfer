import { combine, createDomain } from 'effector-logger';
import { createMutation } from '@farfetched/core';
import { AuthParams } from '@/api/auth';
import { Address } from '@/types';
import { Auth } from './types';

const domain = createDomain();

export const $authUser = domain.store<Auth | null>(null);
export const $balance = domain.store<number>(0);
export const $isAuth = combine($authUser, (user) => !!user);

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
