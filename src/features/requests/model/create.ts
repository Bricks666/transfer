import { createDomain } from 'effector-logger';
import { createMutation } from '@farfetched/core';
import { authModel } from '@/entities/auth';
import { CreateRequestParams, requestsApi } from '@/shared/api';

const createRequestDomain = createDomain();

export const addFx = createRequestDomain.effect<CreateRequestParams, void>();
addFx.use(requestsApi.create);

export const addMutation = createMutation({
	effect: authModel.attachWithSender(addFx),
});
