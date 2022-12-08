import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector-logger';
import { toWei } from 'web3-utils';
import { authModel } from '@/entities/auth';
import { transfersModel } from '@/entities/transfers';
import { CreateTransferParams, Transfer, transfersApi } from '@/shared/api';
import { Status } from '@/shared/types';

const createTransferDomain = createDomain();

export const addFx = createTransferDomain.effect<
	CreateTransferParams,
	unknown
>();
addFx.use(transfersApi.create);

export const addMutation = createMutation({
	effect: authModel.attachWithSender(addFx),
});

sample({
	clock: addMutation.finished.success,
	target: transfersModel.invalidateCache,
});

sample({
	clock: addMutation.finished.success,
	source: authModel.$address,
	fn: (sender, { params, }) =>
		({
			...params,
			money: toWei(params.money, 'ether'),
			status: Status.pending,
			sender,
		} as Transfer),
	target: transfersModel.addTransfer,
});
