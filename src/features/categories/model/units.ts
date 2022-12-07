import { createMutation } from '@farfetched/core';
import { createDomain } from 'effector-logger';
import { authModel } from '@/entities/auth';
import { categoriesApi, CreateCategoryParams } from '@/shared/api';

const CreateCategoryDomain = createDomain();

export const addFx = CreateCategoryDomain.effect<
	CreateCategoryParams,
	unknown
>();
addFx.use(categoriesApi.create);

export const addMutation = createMutation({
	effect: authModel.attachWithSender(addFx),
});
