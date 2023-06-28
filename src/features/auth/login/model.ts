import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { Auth, authApi, AuthParams } from '@/shared/api';
import { authModel } from '@/shared/models';
import { FieldsWithNullable } from '@/shared/types';

const loginDomain = createDomain();

const handlerFx = loginDomain.effect<AuthParams, Auth>(authApi.login);

export const mutation = createMutation({
	effect: handlerFx,
});

type FormOptions = FieldsWithNullable<AuthParams, 'address'>;

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
