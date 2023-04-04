import { createQuery, cache } from '@farfetched/core';
import { createDomain } from 'effector';
import { requestsApi } from '@/shared/api';

const requests = createDomain();

const handlerFx = requests.effect(requestsApi.getAll);

export const query = createQuery({
	effect: handlerFx,
	initialData: [],
});

cache(query);
