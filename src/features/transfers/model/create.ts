import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { addressesModel } from '@/entities/web3';
import { CreateTransferParams, transfersApi } from '@/shared/api';
import { authModel } from '@/shared/models';

const createTransfer = createDomain();

const handlerFx = createTransfer.effect(transfersApi.create);

export const mutation = createMutation({
	effect: authModel.attachWithSender(handlerFx),
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
	domain: createTransfer,
});

sample({
	source: addressesModel.query.$data,
	fn: (addresses) => {
		return addresses[0] ?? '';
	},
	target: form.fields.receiver.set,
});

sample({
	clock: mutation.finished.success,
	target: form.reset,
});

sample({
	clock: form.formValidated,
	target: mutation.start,
});
