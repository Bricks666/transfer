import { Address } from '@/shared/types';
import { web3 } from '../core';

export const getBalance = (address: Address): Promise<string> => {
	return web3.eth.getBalance(address);
};

export const getAddresses = (): Promise<Address[]> => {
	return web3.eth.getAccounts();
};

export const unlock = (
	address: Address,
	password = '0000',
	duration = 0
): Promise<boolean> => {
	return web3.eth.personal.unlockAccount(address, password, duration);
};

export const lock = (address: Address): Promise<boolean> => {
	return web3.eth.personal.lockAccount(address);
};
