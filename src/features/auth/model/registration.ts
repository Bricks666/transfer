import { createDomain } from 'effector-logger';
import { createMutation } from '@farfetched/core';
import { Auth, authApi, AuthParams } from '@/shared/api';

const registrationDomain = createDomain();

const registrationFx = registrationDomain.effect<AuthParams, Auth>();
registrationFx.use(authApi.registration);

export const registrationMutation = createMutation({
	effect: registrationFx,
});
