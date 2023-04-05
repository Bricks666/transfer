import { update } from '@farfetched/core';
import { sample } from 'effector';
import {
	acceptTransferModel,
	cancelTransferModel,
	createTransferModel
} from '@/features/transfers';
import { authModel } from '@/entities/auth';
import { transfersModel } from '@/entities/transfers';
import { Transfer } from '@/shared/api';
import { Status } from '@/shared/types';
import { currentRoute, loadedWithRouteState } from './page';

sample({
	clock: [currentRoute.opened, loadedWithRouteState],
	target: transfersModel.query.start,
});

update(transfersModel.query, {
	on: acceptTransferModel.mutation,
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
						? { ...transfer, status: Status.accept, }
						: transfer
				),
			};
		},
	},
});

update(transfersModel.query, {
	on: cancelTransferModel.mutation,
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
						? { ...transfer, status: Status.cancel, }
						: transfer
				),
			};
		},
	},
});

update(transfersModel.query, {
	on: createTransferModel.mutation,
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

			const lastTransfer = query.result.at(-1);
			const id = (lastTransfer ? +lastTransfer.id + 1 : 1).toString();

			return {
				result: [
					...query.result,
					{
						...mutation.params,
						id,
						status: Status.pending,
						// eslint-disable-next-line effector/no-getState
						sender: authModel.$address.getState(),
						sended_at: (Date.now() / 1000).toString(),
						finished_at: '',
					} as Transfer
				],
				refetch: true,
			};
		},
	},
});
