import { Address } from '@/types';
import { contract } from './core';

export const getAddresses = () => {
	return contract.methods.get_user_addresses().call();
};

export const getOne = (address: Address) => {
	return contract.methods.get_user(address).call();
};
