import { createDomain, sample } from 'effector-logger';
import { createGate } from 'effector-react';
import { cache, createQuery } from '@farfetched/core';
import { Sample, samplesApi } from '@/shared/api';

const samplesDomain = createDomain();

export const getAllFx = samplesDomain.effect<void, Sample[]>();
getAllFx.use(samplesApi.getAll);
export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});

export const SamplesGate = createGate({
	domain: samplesDomain,
});

sample({
	clock: SamplesGate.open,
	target: getAllQuery.start,
});

cache(getAllQuery, {
	staleAfter: '15min',
});
