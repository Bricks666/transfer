import { createQuery } from '@farfetched/core';
import { createDomain } from 'effector-logger';
import { createGate } from 'effector-react';
import { User } from './types';

const domain = createDomain();

export const getAllFx = domain.effect<void, User[]>();

export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});

export const UsersGate = createGate({
	domain,
});
