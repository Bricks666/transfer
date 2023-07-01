import { createMutation, update } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { samplesModel } from '@/entities/samples';
import { CreateSampleParams, samplesApi } from '@/shared/api';
import { authModel, notificationsModel } from '@/shared/models';
import { FieldsWithNullable } from '@/shared/types';

const createSampleDomain = createDomain();

const handlerFx = createSampleDomain.effect<CreateSampleParams, unknown>(
	samplesApi.create
);

export const mutation = createMutation({
	effect: authModel.attachWithSender(handlerFx),
});

type FormOptions = FieldsWithNullable<
	Omit<CreateSampleParams, 'sender'>,
	'category_id'
>;

export const form = createForm<FormOptions>({
	fields: {
		category_id: {
			init: null,
		},
		money: {
			init: 0,
		},
		name: {
			init: '',
		},
	},
	domain: createSampleDomain,
});

sample({
	clock: form.formValidated,
	filter: (values): values is CreateSampleParams => {
		return values.category_id !== null;
	},
	target: mutation.start,
});

sample({
	clock: mutation.finished.success,
	target: form.reset,
});

notificationsModel.withNotifications({
	operation: mutation,
	messages: {
		send: 'Запрос на создание шаблона отправлен',
		success: 'Шаблон создан',
		error: 'Шаблон не был создан',
	},
});

update(samplesModel.query, {
	on: mutation,
	by: {
		success: ({ query, mutation, }) => {
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

			const newId = (query.result.at(-1)?.id ?? 0) + 1;

			return {
				result: [...query.result, { ...mutation.params, id: newId, }],
				refetch: true,
			};
		},
	},
});
