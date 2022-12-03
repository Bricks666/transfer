import { cache } from '@farfetched/core';
import { sample } from 'effector';
import { transfersApi } from '@/shared/api';
import {
	acceptFx,
	addFx,
	cancelFx,
	getAllFx,
	getAllQuery,
	TransfersGate
} from './units';

getAllFx.use(transfersApi.getAll);
addFx.use(transfersApi.create);
acceptFx.use(transfersApi.accept);
cancelFx.use(transfersApi.cancel);

sample({
	clock: TransfersGate.open,
	target: getAllQuery.start,
});

cache(getAllQuery, {
	staleAfter: '15min',
});
