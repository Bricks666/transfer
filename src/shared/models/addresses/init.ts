import { sample } from 'effector';
import { cache } from '@farfetched/core';
import { coreApi } from '@/shared/shared/api';
import { AddressesGate, getAllFx, getAllQuery } from './units';

getAllFx.use(coreApi.getAddresses);

sample({
	clock: AddressesGate.open,
	target: getAllQuery.start,
});

cache(getAllQuery, {
	staleAfter: '15min',
});
