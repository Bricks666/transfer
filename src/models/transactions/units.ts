import { createQuery, createMutation } from '@farfetched/core';
import { createDomain } from 'effector-logger';

const domain = createDomain();

export const getAllFx = domain.effect();
export const addFx = domain.effect();
export const acceptFx = domain.effect();
export const cancelFx = domain.effect();

export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});
export const addMutationFx = createMutation({
	effect: addFx,
});
export const acceptMutationFx = createMutation({
	effect: acceptFx,
});
export const cancelMutationFx = createMutation({
	effect: cancelFx,
});
