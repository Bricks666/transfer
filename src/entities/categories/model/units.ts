import { cache, createQuery } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createGate } from 'effector-react';
import { categoriesApi, Category } from '@/shared/api';

const categoriesDomain = createDomain();

export const getAllFx = categoriesDomain.effect<void, Category[]>();
getAllFx.use(categoriesApi.getAll);
export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});

export const CategoriesGate = createGate({
	domain: categoriesDomain,
});

sample({
	clock: CategoriesGate.open,
	target: getAllQuery.start,
});

cache(getAllQuery, {
	staleAfter: '15min',
});
