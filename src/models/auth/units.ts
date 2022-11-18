import { createDomain } from 'effector-logger';
import { createMutation } from '@farfetched/core';

const domain = createDomain();

export const loginFx = domain.effect();
export const registrationFx = domain.effect();
export const logoutFx = domain.effect();

export const loginMutation = createMutation({
	effect: loginFx,
});
export const registrationMutation = createMutation({
	effect: registrationFx,
});
