import { cache, createQuery } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createGate } from 'effector-react';
import { web3Api } from '@/shared/api';
import { Address } from '@/shared/types';

const addressesDomain = createDomain();
export const getAllFx = addressesDomain.effect<unknown, Address[]>();

getAllFx.use(web3Api.getAddresses);

export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});

export const AddressesGate = createGate({
	domain: addressesDomain,
});

sample({
	clock: AddressesGate.open,
	target: getAllQuery.start,
});

cache(getAllQuery, {
	staleAfter: '15min',
});
