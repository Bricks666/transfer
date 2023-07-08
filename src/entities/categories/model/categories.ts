import { cache, createQuery } from '@farfetched/core';
import { createDomain } from 'effector';
import { categoriesApi } from '@/shared/api';

const categories = createDomain();

const handlerFx = categories.effect(categoriesApi.getAll);
export const query = createQuery({
	effect: handlerFx,
	initialData: [],
});

cache(query);

export const $empty = query.$data.map((data) => !data.length);
