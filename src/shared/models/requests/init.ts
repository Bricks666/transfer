import { sample } from 'effector';
import { cache } from '@farfetched/core';
import { requestsApi } from '@/shared/shared/api';
import {
	acceptFx,
	addFx,
	cancelFx,
	getAllFx,
	getAllQuery,
	RequestsGate,
} from './units';

getAllFx.use(requestsApi.getAll);
addFx.use(requestsApi.create);
acceptFx.use(requestsApi.accept);
cancelFx.use(requestsApi.cancel);

sample({
	clock: RequestsGate.open,
	target: getAllQuery.start,
});

cache(getAllQuery, {
	staleAfter: '15min',
});
