import { createQuery, cache } from '@farfetched/core';
import { createDomain } from 'effector';
import { transfersApi } from '@/shared/api';

const transfers = createDomain();

const handlerFx = transfers.effect(transfersApi.getAll);

export const query = createQuery({
	effect: handlerFx,
	initialData: [],
});

cache(query);
