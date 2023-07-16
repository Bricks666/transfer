import { useEffect, useState } from 'react';
import { Address } from 'web3';
import { web3Api } from '@/shared/api';

export interface UseBalanceOptions {
	readonly address: Address | null;
	readonly timeout?: number;
}

const DEFAULT_TIMEOUT = 1000;

export const useBalance = (options: UseBalanceOptions): string => {
	const { address, timeout = DEFAULT_TIMEOUT, } = options;
	const [balance, setBalance] = useState('0');

	useEffect(() => {
		if (!address) {
			return;
		}

		const id = setInterval(() => {
			web3Api.getBalance(address).then(setBalance);
		}, timeout);

		web3Api.getBalance(address).then(setBalance);

		return () => {
			clearInterval(id);
		};
	}, [address, timeout]);

	return balance;
};
