import Web3 from 'web3';
import { abi, address } from '@/shared/data';
import { Address } from '@/shared/types';

export const web3 = new Web3(import.meta.env.VITE_API_PROVIDER);
export const contract = new web3.eth.Contract(abi, address);

export const getBalance = (address: Address): Promise<string> => {
	return web3.eth.getBalance(address);
};

export const getAddresses = (): Promise<Address[]> => {
	console.log('get');
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
