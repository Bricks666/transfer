import { createMutation } from '@farfetched/core';
import { createDomain } from 'effector';
import { requestsApi } from '@/shared/api';
import { authModel } from '@/shared/models';

const actionsDomain = createDomain();

const acceptFx = actionsDomain.effect(requestsApi.accept);
const cancelFx = actionsDomain.effect(requestsApi.cancel);

export const acceptMutation = createMutation({
	effect: authModel.attachWithSender(acceptFx),
});
export const cancelMutation = createMutation({
	effect: authModel.attachWithSender(cancelFx),
});
