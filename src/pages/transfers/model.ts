import { update } from '@farfetched/core';
import { sample } from 'effector';
import {
	acceptTransferModel,
	cancelTransferModel,
	createTransferModel
} from '@/features/transfers';
import { categoriesModel } from '@/entities/categories';
import { transfersModel } from '@/entities/transfers';
import { addressesModel } from '@/entities/web3';
import { Transfer } from '@/shared/api';
import { routes } from '@/shared/configs';
import { authModel, contractModel } from '@/shared/models';
import { Status } from '@/shared/types';

export const currentRoute = routes.transfers;
export const contractInitiatedRoute =
	contractModel.chainContractInitiated(currentRoute);
export const authorizedRoute = authModel.chainAuthorized(
	contractInitiatedRoute,
	{ otherwise: routes.login.open, }
);

sample({
	clock: authorizedRoute.opened,
	target: [
		categoriesModel.query.start,
		addressesModel.query.start,
		transfersModel.query.start
	],
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
						sender: authModel.$user.getState()?.address,
						sended_at: (Date.now() / 1000).toString(),
						finished_at: '',
					} as Transfer
				],
				refetch: true,
			};
		},
	},
});
