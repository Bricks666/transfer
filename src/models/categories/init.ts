import { sample } from 'effector';
import { cache } from '@farfetched/core';
import { categoriesApi } from '@/api';
import { addFx, getAllFx, getAllQuery, CategoriesGate } from './units';

getAllFx.use(categoriesApi.getAll);
addFx.use(categoriesApi.create);

sample({
	clock: CategoriesGate.open,
	target: getAllQuery.start,
});

cache(getAllQuery, {
	staleAfter: '15min',
});
