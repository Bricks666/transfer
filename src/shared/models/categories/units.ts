import { createDomain } from 'effector-logger';
import { createQuery, createMutation } from '@farfetched/core';
import { createGate } from 'effector-react';
import { attachWithSender } from '@/entities/auth';
import { CreateCategoryParams } from '@/shared/api';

const domain = createDomain();

export const getAllFx = domain.effect<unknown, string[]>();
export const addFx = domain.effect<CreateCategoryParams, unknown>();

export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});
export const addMutation = createMutation({
	effect: attachWithSender(addFx),
});

export const CategoriesGate = createGate({
	domain,
});
