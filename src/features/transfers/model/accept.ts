import { createDomain, sample } from 'effector-logger';
import { createMutation } from '@farfetched/core';
import { transfersModel } from '@/entities/transfers';
import { authModel } from '@/entities/auth';
import { AcceptTransferParams, transfersApi } from '@/shared/api';

const acceptTransferDomain = createDomain();

export const acceptFx = acceptTransferDomain.effect<
	AcceptTransferParams,
	unknown
>();
acceptFx.use(transfersApi.accept);

export const acceptMutation = createMutation({
	effect: authModel.attachWithSender(acceptFx),
});

sample({
	clock: acceptMutation.finished.success,
	target: transfersModel.getAllQuery.start,
});
