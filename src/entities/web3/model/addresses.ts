import { cache, createQuery } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createGate } from 'effector-react';
import { web3Api } from '@/shared/api';
import { Address } from '@/shared/types';

const addressesDomain = createDomain();

const handlerFx = addressesDomain.effect<unknown, Address[]>(
	web3Api.getAddresses
);

export const query = createQuery({
	initialData: [],
	effect: handlerFx,
});

export const Gate = createGate({
	domain: addressesDomain,
});

sample({
	clock: Gate.open,
	target: query.start,
});

cache(query);
