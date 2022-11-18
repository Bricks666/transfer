import { createDomain } from 'effector-logger';
import { createQuery } from '@farfetched/core';
import { Address } from '@/types';

const domain = createDomain();

export const getAllFx = domain.effect<never, Address[]>();

export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});
