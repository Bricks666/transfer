import { cache, createQuery } from '@farfetched/core';
import { createDomain } from 'effector';
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

cache(query);
