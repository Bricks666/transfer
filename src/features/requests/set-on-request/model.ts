import { createMutation, update } from '@farfetched/core';
import { createDomain } from 'effector';
import { requestsModel } from '@/entities/requests';
import { requestsApi } from '@/shared/api';
import { authModel, notificationsModel } from '@/shared/models';
import { Status } from '@/shared/types';

const setOnRequestDomain = createDomain();

const handlerFx = setOnRequestDomain.effect(requestsApi.create);

export const mutation = createMutation({
	effect: authModel.attachWithSender(handlerFx),
});

notificationsModel.attachNotifications({
	operation: mutation,
	messages: {
		send: 'Создание голосования',
		success: 'Голосование создано успешно',
		error: 'Голосование не создано',
	},
});

update(requestsModel.query, {
	on: mutation,
	by: {
		success: ({ query, mutation, }) => {
			if (!query) {
				return { result: [], refetch: true, };
			}

			if ('error' in query) {
				return {
					error: query.error,
					refetch: true,
				};
			}

			const id = (query.result[0]?.id || 0) + 1;

			return {
				result: [
					{
						id,
						accept_voter: [],
						cancel_voter: '',
						candidate: mutation.params.candidate,
						status: Status.pending,
					},
					...query.result
				],
			};
		},
	},
});
