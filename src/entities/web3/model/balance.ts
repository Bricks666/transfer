import { createDomain, sample } from 'effector-logger';
import { createGate } from 'effector-react';
import { interval } from 'patronum';
import { web3Api } from '@/shared/api';
import { Address } from '@/shared/types';

const balanceDomain = createDomain();

export const $balance = balanceDomain.store<string>('0');

export const fetchBalanceFx = balanceDomain.effect<Address, string>();
fetchBalanceFx.use(web3Api.getBalance);

export const BalanceGate = createGate<Address>({
	domain: balanceDomain,
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
