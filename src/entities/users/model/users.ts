import { cache, createQuery } from '@farfetched/core';
import { createDomain } from 'effector';
import { usersApi } from '@/shared/api';

const users = createDomain();

const handlerFx = users.effect(usersApi.getAll);

export const query = createQuery({
	effect: handlerFx,
	initialData: [],
});

cache(query);
