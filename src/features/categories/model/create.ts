import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { categoriesApi, CreateCategoryParams } from '@/shared/api';
import { authModel } from '@/shared/models';

const createCategoryDomain = createDomain();

const handlerFx = createCategoryDomain.effect(categoriesApi.create);

export const mutation = createMutation({
	effect: authModel.attachWithSender(handlerFx),
});

export const form = createForm<Omit<CreateCategoryParams, 'sender'>>({
	domain: createCategoryDomain,
	fields: {
		name: {
			init: '',
		},
	},
});

sample({
	clock: mutation.finished.success,
	target: form.reset,
});
