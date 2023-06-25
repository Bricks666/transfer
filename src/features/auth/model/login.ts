import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { debug } from 'patronum';
import { addressesModel } from '@/entities/web3';
import { Auth, authApi, AuthParams } from '@/shared/api';
import { authModel } from '@/shared/models';

const loginDomain = createDomain();

const handlerFx = loginDomain.effect<AuthParams, Auth>(authApi.login);

export const mutation = createMutation({
	effect: handlerFx,
});

export const form = createForm<AuthParams>({
	fields: {
		address: {
			init: '',
		},
		password: {
			init: '',
		},
	},
	domain: loginDomain,
});

sample({
	clock: form.formValidated,
	target: mutation.start,
});

sample({
	clock: mutation.finished.success,
	target: form.reset,
});

sample({
	clock: addressesModel.query.$data,
	fn: (addresses) => {
		return { address: addresses[0] ?? '', };
	},
	target: form.setInitialForm,
});

sample({
	clock: mutation.finished.success,
	fn: ({ result, }) => ({ address: result.login, role: result.role, }),
	target: authModel.$user,
});

debug(mutation.start, mutation.finished.failure);
