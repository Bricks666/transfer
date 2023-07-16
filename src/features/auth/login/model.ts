import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { Auth, authApi, AuthParams } from '@/shared/api';
import { authModel, notificationsModel } from '@/shared/models';
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
		walletPassword: {
			init: '',
		},
		password: {
			init: '',
		},
	},
	domain: loginDomain,
});

export const $addressSelected = form.fields.address.$value.map(Boolean);

sample({
	clock: form.formValidated,
	filter: (params): params is AuthParams => {
		return !!params.address && !!params.password && !!params.walletPassword;
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
		send: 'Попытка входа',
		success: 'Вход успешен',
		error: 'Не удалось войти',
	},
});
