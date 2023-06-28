import { createMutation, update } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { transfersModel } from '@/entities/transfers';
import { CreateTransferParams, Transfer, transfersApi } from '@/shared/api';
import { authModel } from '@/shared/models';
import { FieldsWithNullable, Status } from '@/shared/types';

const createTransfer = createDomain();

const handlerFx = createTransfer.effect(transfersApi.create);

export const mutation = createMutation({
	effect: authModel.attachWithSender(handlerFx),
});

type FormOptions = FieldsWithNullable<
	Omit<CreateTransferParams, 'sender'>,
	'receiver' | 'category_id'
>;

export const form = createForm<FormOptions>({
	fields: {
		category_id: {
			init: null,
		},
		description: {
			init: '',
		},
		keyword: {
			init: '',
		},
		money: {
			init: 0,
		},
		receiver: {
			init: null,
		},
	},
	domain: createTransfer,
});

sample({
	clock: mutation.finished.success,
	target: form.reset,
});

sample({
	clock: form.formValidated,
	fn: (values): values is CreateTransferParams => {
		return !!values.receiver;
	},
	target: mutation.start as any,
});

update(transfersModel.query, {
	on: mutation,
	by: {
		success: {
			source: authModel.$user,
			fn: ({ query, mutation, }, sender) => {
				if (!query) {
					return {
						result: [],
						refetch: true,
					};
				}

				if ('error' in query) {
					return {
						error: query.error,
						refetch: true,
					};
				}

				const lastTransfer = query.result.at(-1);
				const id = lastTransfer ? +lastTransfer.id + 1 : 1;

				return {
					result: [
						...query.result,
						{
							...mutation.params,
							id,
							status: Status.pending,
							sender: sender!.address,
							sended_at: Date.now() / 1000,
							finished_at: 0,
						} as Transfer
					],
					refetch: true,
				};
			},
		},
	},
});
