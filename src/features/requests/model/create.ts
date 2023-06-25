import { createMutation } from '@farfetched/core';
import { createDomain } from 'effector';
import { requestsApi } from '@/shared/api';
import { authModel } from '@/shared/models';

const createRequestDomain = createDomain();

const handlerFx = createRequestDomain.effect(requestsApi.create);

export const mutation = createMutation({
	effect: authModel.attachWithSender(handlerFx),
});
