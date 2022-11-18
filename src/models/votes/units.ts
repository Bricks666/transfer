import { createQuery, createMutation } from '@farfetched/core';
import { createDomain } from 'effector-logger';

const domain = createDomain();

export const getAllFx = domain.effect();
export const acceptFx = domain.effect();
export const cancelFx = domain.effect();

export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});
export const acceptMutation = createMutation({
	effect: acceptFx,
});
export const cancelMutation = createMutation({
	effect: cancelFx,
});
