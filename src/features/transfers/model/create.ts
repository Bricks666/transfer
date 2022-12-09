import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-react-form';
import { toWei } from 'web3-utils';
import { authModel } from '@/entities/auth';
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
	effect: authModel.attachWithSender(addFx),
});

export const form = createForm<Omit<CreateTransferParams, 'sender'>>({
	domain: createTransferDomain,
	name: 'create transfer',
	initialValues: {
		category_id: '0',
		description: '',
		keyword: '',
		money: '0',
		receiver: '',
	},
	onSubmit: ({ values, }) => addMutation.start(values),
});

sample({
	source: addressesModel.getAllQuery.$data,
	fn: (addresses) => ({
		field: form.getNameStr('receiver'),
		value: addresses[0],
	}),
	target: form.setValue,
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
