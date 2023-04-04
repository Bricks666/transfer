import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { toWei } from 'web3-utils';
import { authModel, attachWithSender } from '@/entities/auth';
import { transfersModel } from '@/entities/transfers';
import { addressesModel } from '@/entities/web3';
import { CreateTransferParams, Transfer, transfersApi } from '@/shared/api';
import { Status } from '@/shared/types';

const createTransferDomain = createDomain();

export const addFx = createTransferDomain.effect<
	CreateTransferParams,
	unknown
>();
addFx.use(transfersApi.create);

export const addMutation = createMutation({
	effect: attachWithSender(addFx),
});

export const form = createForm<Omit<CreateTransferParams, 'sender'>>({
	fields: {
		category_id: {
			init: '0',
		},
		description: {
			init: '',
		},
		keyword: {
			init: '',
		},
		money: {
			init: '0',
		},
		receiver: {
			init: '',
		},
	},
	domain: createTransferDomain,
});

sample({
	source: addressesModel.query.$data,
	fn: (addresses) => {
		return addresses[0] ?? '';
	},
	target: form.fields.receiver.set,
});

sample({
	clock: addMutation.finished.success,
	target: [transfersModel.invalidateCache, form.reset],
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
