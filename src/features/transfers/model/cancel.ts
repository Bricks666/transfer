import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector-logger';
import { authModel } from '@/entities/auth';
import { transfersModel } from '@/entities/transfers';
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
