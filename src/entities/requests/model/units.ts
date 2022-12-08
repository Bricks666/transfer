import { createQuery, cache } from '@farfetched/core';
import { createDomain, sample } from 'effector-logger';
import { createGate } from 'effector-react';
import { Request, requestsApi } from '@/shared/api';

const requestsDomain = createDomain();

export const getAllFx = requestsDomain.effect<void, Request[]>();
getAllFx.use(requestsApi.getAll);

export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});
export const RequestsGate = createGate({
	domain: requestsDomain,
});

sample({
	clock: RequestsGate.open,
	target: getAllQuery.start,
});

cache(getAllQuery, {
	staleAfter: '15min',
});
