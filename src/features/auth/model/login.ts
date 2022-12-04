import { createDomain, sample } from 'effector-logger';
import { spread } from 'patronum';
import { createMutation } from '@farfetched/core';
import { setAddress, setRole } from '@/entities/auth';
import { Auth, authApi, AuthParams } from '@/shared/api';

const loginDomain = createDomain();

const loginFx = loginDomain.effect<AuthParams, Auth>();
loginFx.use(authApi.login);

export const loginMutation = createMutation({
	effect: loginFx,
});

sample({
	clock: loginMutation.finished.success,
	fn: ({ data, }) => data,
	target: spread({
		targets: {
			login: setAddress,
			role: setRole,
		},
	}),
});
