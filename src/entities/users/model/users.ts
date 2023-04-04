import { cache, createQuery } from '@farfetched/core';
import { createDomain } from 'effector';
import { User, usersApi } from '@/shared/api';

const users = createDomain();

export const handlerFx = users.effect<void, User[]>();
handlerFx.use(usersApi.getAll);

export const query = createQuery({
	effect: handlerFx,
	initialData: [],
});

cache(query);
