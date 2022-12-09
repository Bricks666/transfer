import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-react-form';
import { spread } from 'patronum';
import { authModel } from '@/entities/auth';
import { addressesModel } from '@/entities/web3';
import { Auth, authApi, AuthParams } from '@/shared/api';

const loginDomain = createDomain();

export const loginFx = loginDomain.effect<AuthParams, Auth>();
loginFx.use(authApi.login);

export const loginMutation = createMutation({
	effect: loginFx,
});

export const form = createForm<AuthParams>({
	domain: loginDomain,
	name: 'login',
	initialValues: {
		address: '',
		password: '',
	},
	onSubmit: ({ values, }) => loginMutation.start(values),
});

sample({
	clock: loginMutation.finished.success,
	target: form.reset,
});

sample({
	clock: addressesModel.getAllQuery.$data,
	fn: (addresses) => {
		return { field: 'address', value: addresses[0], };
	},
	target: form.setValue,
});

sample({
	clock: loginMutation.finished.success,
	fn: ({ result, }) => result,
	target: spread({
		targets: {
			login: authModel.setAddress,
			role: authModel.setRole,
		},
	}),
});
