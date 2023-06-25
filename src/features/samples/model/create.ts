import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { CreateSampleParams, samplesApi } from '@/shared/api';
import { authModel } from '@/shared/models';

const createSampleDomain = createDomain();

const handlerFx = createSampleDomain.effect<CreateSampleParams, unknown>(
	samplesApi.create
);

export const mutation = createMutation({
	effect: authModel.attachWithSender(handlerFx),
});

export const form = createForm<Omit<CreateSampleParams, 'sender'>>({
	fields: {
		category_id: {
			init: '',
		},
		money: {
			init: '',
		},
		name: {
			init: '',
		},
	},
	domain: createSampleDomain,
});

sample({
	clock: mutation.finished.success,
	target: form.reset,
});
