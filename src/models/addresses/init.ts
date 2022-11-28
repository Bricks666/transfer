import { cache } from '@farfetched/core';
import { coreApi } from '@/api';
import { getAllFx, getAllQuery } from './units';

getAllFx.use(coreApi.getAddresses);

cache(getAllQuery);
