import { cache } from '@farfetched/core';
import { categoriesApi } from '@/api';
import { addFx, getAllFx, getAllQuery } from './units';

getAllFx.use(categoriesApi.getAll);
addFx.use(categoriesApi.create);

cache(getAllQuery);
