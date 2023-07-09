import { Mutation, Query } from '@farfetched/core';
import { sample } from 'effector';
import { createSnackbarStackModel } from 'effector-mui-snacks';

export const snacks = createSnackbarStackModel({
	variant: 'filled',
	maxCount: 5,
});

interface Messages {
	readonly send: string;
	readonly success: string;
	readonly error: string;
}

interface WithNotificationsParams {
	readonly messages: Messages;
	readonly operation: Query<any, any, any> | Mutation<any, any, any>;
}

export const attachNotifications = (params: WithNotificationsParams) => {
	const { messages, operation, } = params;
	sample({
		clock: operation.start,
		fn: () =>
			({
				message: messages.send,
				color: 'info',
			} as const),
		target: snacks.create,
	});

	sample({
		clock: operation.finished.success,
		fn: () =>
			({
				message: messages.success,
				color: 'success',
			} as const),
		target: snacks.create,
	});

	sample({
		clock: operation.finished.failure,
		fn: () =>
			({
				message: messages.error,
				color: 'error',
			} as const),
		target: snacks.create,
	});
};
