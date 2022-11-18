import { createQuery } from '@farfetched/core';
import { createDomain } from 'effector-logger';

const domain = createDomain();

export const getAllFx = domain.effect();

export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});
