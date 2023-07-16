import { createMutation, update } from '@farfetched/core';
import { combine, createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { toWei } from 'web3-utils';
import { samplesModel } from '@/entities/samples';
import { transfersModel } from '@/entities/transfers';
import { CreateTransferParams, transfersApi } from '@/shared/api';
import { authModel, notificationsModel } from '@/shared/models';
import { FieldsWithNullable, Status } from '@/shared/types';

const createTransfer = createDomain();

const handlerFx = createTransfer.effect(transfersApi.create);

export const mutation = createMutation({
	effect: authModel.attachWithSender(handlerFx),
});

type FormOptions = FieldsWithNullable<
	Omit<CreateTransferParams, 'sender' | 'category_id' | 'money'>,
	'receiver'
> & {
	sample_id: number | null;
};

export const form = createForm<FormOptions>({
	fields: {
		sample_id: {
			init: null,
		},
		description: {
			init: '',
		},
		keyword: {
			init: '',
		},
		receiver: {
			init: null,
		},
	},
	domain: createTransfer,
});

export const $selectedSample = combine(
	form.fields.sample_id.$value,
	samplesModel.query.$data,
	(sampleId, samples) => {
		if (sampleId === null) {
			return null;
		}

		return samples.find((sample) => sample.id === sampleId) ?? null;
	}
);

sample({
	clock: mutation.finished.success,
	target: form.reset,
});

sample({
	clock: form.formValidated,
	source: $selectedSample,
	filter: (sample, values) => {
		return !!values.receiver && !!sample;
	},
	fn: (sample, values) => {
		return {
			category_id: sample!.category_id,
			description: values.description,
			keyword: values.keyword,
			money: sample!.money,
			receiver: values.receiver!,
		};
	},
	target: mutation.start,
});

notificationsModel.attachNotifications({
	operation: mutation,
	messages: {
		send: 'Запрос на перевод отправлен',
		success: 'Перевод отправлен',
		error: 'Перевод не был отправлен',
	},
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
							money: toWei(mutation.params.money, 'ether') as unknown as number,
							finished_at: 0,
						}
					],
					refetch: true,
				};
			},
		},
	},
});
