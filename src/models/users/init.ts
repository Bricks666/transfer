import { cache } from '@farfetched/core';
import { usersApi } from '@/api';
import { getAllFx, getAllQuery } from './units';

getAllFx.use(usersApi.getAll);

cache(getAllQuery);
