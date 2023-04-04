import { createDomain, sample } from 'effector';
import { createGate } from 'effector-react';
import { interval } from 'patronum';
import { web3Api } from '@/shared/api';
import { Address } from '@/shared/types';

const balance = createDomain();

export const $balance = balance.store<string>('0');

export const fetchBalanceFx = balance.effect<Address, string>(
	web3Api.getBalance
);

export const BalanceGate = createGate<Address>({
	domain: balance,
});

export const fetchBalance = interval({
	timeout: 3000,
	start: BalanceGate.open,
	stop: BalanceGate.close,
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
