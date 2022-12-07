import { createQuery } from '@farfetched/core';
import { createDomain, sample } from 'effector-logger';
import { createGate } from 'effector-react';
import { User, usersApi } from '@/shared/api';

const usersDomain = createDomain();

export const getAllFx = usersDomain.effect<void, User[]>();
getAllFx.use(usersApi.getAll);

export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});

export const UsersGate = createGate({
	domain: usersDomain,
});

sample({
	clock: UsersGate.open,
	target: getAllQuery.start,
});
