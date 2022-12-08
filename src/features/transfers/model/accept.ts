import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector-logger';
import { authModel } from '@/entities/auth';
import { transfersModel } from '@/entities/transfers';
import { AcceptTransferParams, transfersApi } from '@/shared/api';
import { Status } from '@/shared/types';

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
	fn: ({ params, }) => ({ id: params.id, status: Status.accept, }),
	target: transfersModel.finishedTransfer,
});
