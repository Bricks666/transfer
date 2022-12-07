import { createDomain, sample } from 'effector-logger';
import { createMutation } from '@farfetched/core';
import { transfersModel } from '@/entities/transfers';
import { authModel } from '@/entities/auth';
import { CancelTransferParams, transfersApi } from '@/shared/api';

const cancelTransferDomain = createDomain();

export const cancelFx = cancelTransferDomain.effect<
	CancelTransferParams,
	unknown
>();
cancelFx.use(transfersApi.cancel);

export const cancelMutation = createMutation({
	effect: authModel.attachWithSender(cancelFx),
});

sample({
	clock: cancelMutation.finished.success,
	target: transfersModel.getAllQuery.start,
});
