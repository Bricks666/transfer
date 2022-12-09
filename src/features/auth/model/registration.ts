import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-react-form';
import { addressesModel } from '@/entities/web3';
import { Auth, authApi, AuthParams } from '@/shared/api';

const registrationDomain = createDomain();

const registrationFx = registrationDomain.effect<AuthParams, Auth>();
registrationFx.use(authApi.registration);

export const registrationMutation = createMutation({
	effect: registrationFx,
});

export const form = createForm<AuthParams>({
	domain: registrationDomain,
	name: 'registration',
	initialValues: {
		address: '',
		password: '',
	},
	onSubmit: ({ values, }) => registrationMutation.start(values),
});

sample({
	clock: addressesModel.getAllQuery.$data,
	fn: (addresses) => {
		return { field: 'address', value: addresses[0], };
	},
	target: form.setValue,
});

sample({
	clock: registrationMutation.finished.success,
	target: form.reset,
});
