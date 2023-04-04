import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { debug, spread } from 'patronum';
import { authModel } from '@/entities/auth';
import { addressesModel } from '@/entities/web3';
import { Auth, authApi, AuthParams } from '@/shared/api';

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
		return addresses[0] ?? '';
	},
	target: form.fields.address.set,
});

sample({
	clock: mutation.finished.success,
	fn: ({ result, }) => result,
	target: spread({
		targets: {
			login: authModel.setAddress,
			role: authModel.setRole,
		},
	}),
});

debug(mutation.start, mutation.finished.failure);
