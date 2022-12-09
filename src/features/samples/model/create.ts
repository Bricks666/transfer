import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-react-form';
import { authModel } from '@/entities/auth';
import { CreateSampleParams, samplesApi } from '@/shared/api';

const createSampleDomain = createDomain();

export const addFx = createSampleDomain.effect<CreateSampleParams, unknown>();
addFx.use(samplesApi.create);

export const addMutation = createMutation({
	effect: authModel.attachWithSender(addFx),
});

export const form = createForm<Omit<CreateSampleParams, 'sender'>>({
	domain: createSampleDomain,
	name: 'crate sample',
	initialValues: {
		category_id: '0',
		money: '',
		name: '',
	},
	onSubmit: ({ values, }) => addMutation.start(values),
});

sample({
	clock: addMutation.finished.success,
	target: form.reset,
});
