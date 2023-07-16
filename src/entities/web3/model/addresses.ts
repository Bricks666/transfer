import { cache, createQuery } from '@farfetched/core';
import { createDomain } from 'effector';
import { web3Api } from '@/shared/api';

const addressesDomain = createDomain();

const handlerFx = addressesDomain.effect(web3Api.getAddresses);

export const query = createQuery({
	initialData: [],
	effect: handlerFx,
});

cache(query);
