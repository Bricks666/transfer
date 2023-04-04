import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { authModel } from '@/entities/auth';
import { CreateSampleParams, samplesApi } from '@/shared/api';

const createSampleDomain = createDomain();

export const addFx = createSampleDomain.effect<CreateSampleParams, unknown>(
	samplesApi.create
);

export const addMutation = createMutation({
	effect: authModel.attachWithSender(addFx),
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
	clock: addMutation.finished.success,
	target: form.reset,
});
