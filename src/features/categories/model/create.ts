import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { authModel } from '@/entities/auth';
import { categoriesApi, CreateCategoryParams } from '@/shared/api';

const createCategoryDomain = createDomain();

export const addFx = createCategoryDomain.effect<
	CreateCategoryParams,
	unknown
>();
addFx.use(categoriesApi.create);

export const addMutation = createMutation({
	effect: authModel.attachWithSender(addFx),
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
	clock: addMutation.finished.success,
	target: form.reset,
});
