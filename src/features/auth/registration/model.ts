import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { authApi, AuthParams } from '@/shared/api';
import { notificationsModel } from '@/shared/models';
import { FieldsWithNullable } from '@/shared/types';

const registration = createDomain();

const handlerFx = registration.effect<AuthParams, unknown>(
	authApi.registration
);

export const mutation = createMutation({
	effect: handlerFx,
});

type FormOptions = FieldsWithNullable<Omit<AuthParams, 'sender'>, 'address'>;

export const form = createForm<FormOptions>({
	fields: {
		address: {
			init: null,
		},
		walletPassword: {
			init: '',
		},
		password: {
			init: '',
		},
	},
	domain: registration,
});

export const $addressSelected = form.fields.address.$value.map(Boolean);

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

sample({
	clock: form.fields.address.changed,
	target: form.fields.walletPassword.resetValue,
});

sample({
	clock: mutation.finished.failure,
	target: [
		form.fields.password.resetValue,
		form.fields.walletPassword.resetValue
	],
});

notificationsModel.attachNotifications({
	operation: mutation,
	messages: {
		send: 'Попытка регистрации',
		success: 'Регистрация успешна',
		error: 'Не удалось зарегистрироваться',
	},
});
