import { createQuery, cache } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createGate } from 'effector-react';
import { Transfer, transfersApi } from '@/shared/api';
import { Status } from '@/shared/types';

const transfersDomain = createDomain();

export const getAllFx = transfersDomain.effect<void, Transfer[]>();
getAllFx.use(transfersApi.getAll);
export const invalidateCache = transfersDomain.event();
export const addTransfer = transfersDomain.event<Transfer>();
export const finishedTransfer = transfersDomain.event<{
	id: string;
	status: Status;
}>();

export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});

export const TransfersGate = createGate({
	domain: transfersDomain,
});

sample({
	clock: TransfersGate.open,
	target: getAllQuery.start,
});

sample({
	clock: TransfersGate.close,
	target: invalidateCache,
});

cache(getAllQuery, {
	staleAfter: '15min',
	purge: invalidateCache,
});

sample({
	clock: addTransfer,
	source: getAllQuery.$data,
	fn: (transfers, transfer) => [...transfers, transfer],
	target: getAllQuery.$data,
});

sample({
	clock: finishedTransfer,
	source: getAllQuery.$data,
	fn: (transfers, { id, status, }) =>
		transfers.map((transfer) =>
			+transfer.id === +id ? { ...transfer, status, } : transfer
		),
	target: getAllQuery.$data,
});
