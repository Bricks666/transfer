import { cache } from '@farfetched/core';
import { sample } from 'effector';
import { samplesApi } from '@/api';
import { addFx, getAllFx, getAllQuery, SamplesGate } from './units';

getAllFx.use(samplesApi.getAll);
addFx.use(samplesApi.create);

sample({
	clock: SamplesGate.open,
	target: getAllQuery.start,
});

cache(getAllQuery, {
	staleAfter: '15min',
});
