import { createMutation } from '@farfetched/core';
import { createDomain } from 'effector';
import { authModel } from '@/entities/auth';
import { ChangeRequestParams, requestsApi } from '@/shared/api';

const actionsDomain = createDomain();

export const acceptFx = actionsDomain.effect<ChangeRequestParams, void>();
export const cancelFx = actionsDomain.effect<ChangeRequestParams, void>();
acceptFx.use(requestsApi.accept);
cancelFx.use(requestsApi.cancel);

export const acceptMutation = createMutation({
	effect: authModel.attachWithSender(acceptFx),
});
export const cancelMutation = createMutation({
	effect: authModel.attachWithSender(cancelFx),
});
