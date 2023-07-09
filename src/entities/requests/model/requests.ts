import { createQuery, cache } from '@farfetched/core';
import { createDomain } from 'effector';
import { requestsApi } from '@/shared/api';
import { descending } from '@/shared/lib';

const requests = createDomain();

const handlerFx = requests.effect(requestsApi.getAll);

export const query = createQuery({
	effect: handlerFx,
	initialData: [],
	mapData: ({ result, }) => result.sort(descending),
});

export const $empty = query.$data.map((data) => !data.length);

cache(query);
