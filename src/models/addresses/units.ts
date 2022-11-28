import { createDomain } from 'effector-logger';
import { createGate } from 'effector-react';
import { createQuery } from '@farfetched/core';
import { Address } from '@/types';

const domain = createDomain();

export const getAllFx = domain.effect<unknown, Address[]>();

export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});

export const AddressesGate = createGate({
	domain,
});
