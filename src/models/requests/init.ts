import { cache } from '@farfetched/core';
import { requestsApi } from '@/api';
import { acceptFx, addFx, cancelFx, getAllFx, getAllQuery } from './units';

getAllFx.use(requestsApi.getAll);
addFx.use(requestsApi.create);
acceptFx.use(requestsApi.accept);
cancelFx.use(requestsApi.cancel);

cache(getAllQuery);
