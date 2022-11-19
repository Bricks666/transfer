import { Address } from '@/types';
import { contract } from './core';

export const registration = (address: Address) => {
	return contract.methods.reg_user().send({ from: address });
};

export const login = (address: Address) => {
	return contract.methods.login_user().call({ from: address });
};
