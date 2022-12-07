import { createQuery, cache } from '@farfetched/core';
import { createGate } from 'effector-react';
import { createDomain, sample } from 'effector-logger';
import { Transfer, transfersApi } from '@/shared/api';

const transfersDomain = createDomain();

export const getAllFx = transfersDomain.effect<void, Transfer[]>();
getAllFx.use(transfersApi.getAll);

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

cache(getAllQuery, {
	staleAfter: '15min',
});
