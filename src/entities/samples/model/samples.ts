import { cache, createQuery } from '@farfetched/core';
import { createDomain } from 'effector';
import { samplesApi } from '@/shared/api';

const samples = createDomain();

const handlerFx = samples.effect(samplesApi.getAll);
export const query = createQuery({
	effect: handlerFx,
	initialData: [],
});

cache(query);
