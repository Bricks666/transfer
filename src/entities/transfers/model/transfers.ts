import { createQuery, cache } from '@farfetched/core';
import { combine, createDomain } from 'effector';
import { transfersApi } from '@/shared/api';
import { authModel } from '@/shared/models';

const transfers = createDomain();

const handlerFx = transfers.effect(transfersApi.getAll);

export const query = createQuery({
	effect: handlerFx,
	initialData: [],
});

cache(query);

export const $userTransfers = combine(
	authModel.$user,
	query.$data,
	(user, transfers) => {
		if (!user) {
			return [];
		}

		return transfers.filter(
			(transfer) =>
				transfer.sender === user.address || transfer.receiver === user.address
		);
	}
);

export const $empty = $userTransfers.map((data) => !data.length);
