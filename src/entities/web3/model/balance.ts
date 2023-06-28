import { createDomain, sample } from 'effector';
import { createGate } from 'effector-react';
import { interval } from 'patronum';
import type { Address } from 'web3';
import { web3Api } from '@/shared/api';

const balance = createDomain();

export const $balance = balance.store<string>('0');

export const fetchBalanceFx = balance.effect(web3Api.getBalance);

export const BalanceGate = createGate<Address>({
	domain: balance,
});

export const fetchBalance = interval({
	timeout: 1000,
	start: BalanceGate.open,
	stop: BalanceGate.close,
});

$balance.reset(BalanceGate.close);

sample({
	clock: fetchBalance.tick,
	source: BalanceGate.state,
	target: fetchBalanceFx,
});

sample({
	clock: fetchBalanceFx.doneData,
	target: $balance,
});
