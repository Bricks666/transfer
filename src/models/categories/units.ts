import { createQuery, createMutation } from '@farfetched/core';
import { createDomain } from 'effector-logger';

const domain = createDomain();

export const getAllFx = domain.effect();
export const addFx = domain.effect();

export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});
export const addMutation = createMutation({
	effect: addFx,
});
