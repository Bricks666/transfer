import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { attachWithSender } from '@/entities/auth';
import { transfersModel } from '@/entities/transfers';
import { CancelTransferParams, transfersApi } from '@/shared/api';
import { Status } from '@/shared/types';

const cancelTransferDomain = createDomain();

export const cancelFx = cancelTransferDomain.effect<
	CancelTransferParams,
	unknown
>();
cancelFx.use(transfersApi.cancel);

export const cancelMutation = createMutation({
	effect: attachWithSender(cancelFx),
});

sample({
	clock: cancelMutation.finished.success,
	fn: ({ params, }) => ({ id: params.id, status: Status.cancel, }),
	target: transfersModel.finishedTransfer,
});
