import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { addressesModel } from '@/entities/web3';
import { authApi, AuthParams } from '@/shared/api';

const registration = createDomain();

const handlerFx = registration.effect<AuthParams, unknown>(
	authApi.registration
);

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
	domain: registration,
});

sample({
	clock: addressesModel.query.$data,
	fn: (addresses) => {
		return { address: addresses[0] ?? '', };
	},
	target: form.setInitialForm,
});

sample({
	clock: form.formValidated,
	target: mutation.start,
});

sample({
	clock: mutation.finished.success,
	target: form.reset,
});
