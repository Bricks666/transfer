import { createDomain, sample } from 'effector-logger';
import { createGate } from 'effector-react';
import { interval } from 'patronum';
import { cache, createQuery } from '@farfetched/core';
import { Address } from '@/shared/types';
import { web3Api } from '@/shared/api';

const web3Domain = createDomain();

export const $balance = web3Domain.store<string>('0');

export const getAllFx = web3Domain.effect<unknown, Address[]>();
export const fetchBalanceFx = web3Domain.effect<Address, string>();
getAllFx.use(web3Api.getAddresses);

export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});

export const AddressesGate = createGate({
	domain: web3Domain,
});

export const BalanceGate = createGate<Address>({
	domain: web3Domain,
});

export const fetchBalance = interval({
	timeout: 3000,
	start: BalanceGate.open,
	stop: BalanceGate.close,
});

sample({
	clock: AddressesGate.open,
	target: getAllQuery.start,
});

sample({
	clock: fetchBalance.tick,
	source: BalanceGate.state,
	target: fetchBalanceFx,
});

sample({
	clock: fetchBalanceFx.doneData,
	target: $balance,
});

cache(getAllQuery, {
	staleAfter: '15min',
});
