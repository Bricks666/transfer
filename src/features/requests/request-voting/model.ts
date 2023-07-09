import { createMutation, update } from '@farfetched/core';
import { createDomain } from 'effector';
import { requestsModel } from '@/entities/requests';
import { requestsApi } from '@/shared/api';
import { authModel, notificationsModel } from '@/shared/models';

const actionsDomain = createDomain();

const acceptFx = actionsDomain.effect(requestsApi.accept);
const cancelFx = actionsDomain.effect(requestsApi.cancel);

export const acceptMutation = createMutation({
	effect: authModel.attachWithSender(acceptFx),
});
export const cancelMutation = createMutation({
	effect: authModel.attachWithSender(cancelFx),
});

notificationsModel.attachNotifications({
	operation: acceptMutation,
	messages: {
		send: 'Отправка голоса за',
		success: 'Голос успешно отправлен',
		error: 'Голос не был отправлен',
	},
});
notificationsModel.attachNotifications({
	operation: cancelMutation,
	messages: {
		send: 'Отправка голоса против',
		success: 'Голос успешно отправлен',
		error: 'Голос не был отправлен',
	},
});

update(requestsModel.query, {
	on: acceptMutation,
	by: {
		success: {
			source: authModel.$user,
			fn: ({ query, mutation, }, user) => {
				if (!query || !user) {
					return { result: [], refetch: true, };
				}

				if ('error' in query) {
					return {
						error: query.error,
						refetch: true,
					};
				}

				return {
					result: query.result.map((request) =>
						request.id === mutation.params.id
							? {
								...request,
								accept_voter: [...request.accept_voter, user.address],
							  }
							: request
					),
					refetch: true,
				};
			},
		},
	},
});

update(requestsModel.query, {
	on: cancelMutation,
	by: {
		success: {
			source: authModel.$user,
			fn: ({ query, mutation, }, user) => {
				if (!query || !user) {
					return { result: [], refetch: true, };
				}

				if ('error' in query) {
					return {
						error: query.error,
						refetch: true,
					};
				}

				return {
					result: query.result.map((request) =>
						request.id === mutation.params.id
							? {
								...request,
								cancel_voter: user.address,
							  }
							: request
					),
					refetch: true,
				};
			},
		},
	},
});
