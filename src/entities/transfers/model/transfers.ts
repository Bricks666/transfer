import { createQuery, cache } from '@farfetched/core';
import { type Store, combine, createDomain } from 'effector';
import { transfersApi } from '@/shared/api';
import { authModel } from '@/shared/models';
import { type IdentifiedTransfer, TRANSFER_TYPE } from './types';

const transfers = createDomain();

const handlerFx = transfers.effect(transfersApi.getAll);

export const query = createQuery({
	effect: handlerFx,
	initialData: [],
});

export const $userTransfers: Store<IdentifiedTransfer[]> = combine(
	authModel.$user,
	query.$data,
	(user, transfers) => {
		if (!user) {
			return [];
		}

		return transfers
			.filter(
				(transfer) =>
					transfer.sender === user.address || transfer.receiver === user.address
			)
			.map((transfer) => ({
				...transfer,
				type:
					transfer.sender === user.address
						? TRANSFER_TYPE.OUTGOING
						: TRANSFER_TYPE.INCOMING,
			}));
	}
);

export const $empty = $userTransfers.map((data) => !data.length);

cache(query);
