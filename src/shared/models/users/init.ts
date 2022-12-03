import { sample } from 'effector';
import { cache } from '@farfetched/core';
import { usersApi } from '@/shared/api';
import { getAllFx, getAllQuery, UsersGate } from './units';

getAllFx.use(usersApi.getAll);

sample({
	clock: UsersGate.open,
	target: getAllQuery.start,
});

cache(getAllQuery, {
	staleAfter: '15min',
});
