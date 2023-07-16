import type { Address } from 'web3';
import { personal, web3 } from '../core';

export const getBalance = async (address: Address): Promise<string> => {
	const value = await web3.eth.getBalance(address);
	return value.toString();
};

export const getAddresses = (): Promise<Address[]> => {
	return personal.getAccounts();
};

export const unlock = (
	address: Address,
	password = '0000',
	duration = 0
): Promise<boolean> => {
	return personal.unlockAccount(address, password, duration);
};

export const lock = (address: Address): Promise<boolean> => {
	return personal.lockAccount(address);
};
