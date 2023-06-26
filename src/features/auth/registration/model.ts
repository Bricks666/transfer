import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import type { Address } from 'web3';
import { authApi, AuthParams } from '@/shared/api';

const registration = createDomain();

const handlerFx = registration.effect<AuthParams, unknown>(
	authApi.registration
);

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
	domain: registration,
});

sample({
	clock: form.formValidated,
	filter: (values): values is AuthParams => {
		return !!values.address && !!values.password;
	},
	target: mutation.start,
});

sample({
	clock: mutation.finished.success,
	target: form.reset,
});
