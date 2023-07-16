import { createMutation, update } from '@farfetched/core';
import { createDomain } from 'effector';
import { transfersModel } from '@/entities/transfers';
import { transfersApi } from '@/shared/api';
import { authModel, notificationsModel } from '@/shared/models';
import { Status } from '@/shared/types';

const cancelTransfer = createDomain();

const handlerFx = cancelTransfer.effect(transfersApi.cancel);

export const mutation = createMutation({
	effect: authModel.attachWithSender(handlerFx),
});

notificationsModel.attachNotifications({
	operation: mutation,
	messages: {
		send: 'Отмена перевода',
		success: 'Перевод был отменен',
		error: 'Перевод не был отменен',
	},
});

update(transfersModel.query, {
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

			return {
				result: query.result.map((transfer) =>
					transfer.id === mutation.params.id
						? {
							...transfer,
							status: Status.cancel,
							finished_at: Date.now() / 1000,
						  }
						: transfer
				),
			};
		},
	},
});
