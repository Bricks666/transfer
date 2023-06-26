import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import type { Address } from 'web3';
import { Auth, authApi, AuthParams } from '@/shared/api';
import { authModel } from '@/shared/models';

const loginDomain = createDomain();

const handlerFx = loginDomain.effect<AuthParams, Auth>(authApi.login);

export const mutation = createMutation({
	effect: handlerFx,
});

interface FormOptions {
	readonly address: Address | null;
	readonly password: string;
}

export const form = createForm<FormOptions>({
	fields: {
		address: {
			init: null,
		},
		password: {
			init: '',
		},
	},
	domain: loginDomain,
});

sample({
	clock: form.formValidated,
	filter: (params): params is AuthParams => {
		return !!params.address && !!params.password;
	},
	target: mutation.start,
});

sample({
	clock: mutation.finished.success,
	target: form.reset,
});

sample({
	clock: mutation.finished.success,
	fn: ({ result, }) => ({ address: result.login, role: result.role, }),
	target: authModel.$user,
});
