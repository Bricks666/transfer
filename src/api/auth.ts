import { keccak256 } from 'web3-utils';
import { Auth } from '@/models';
import { Address } from '@/types';
import { contract } from './core';

export interface AuthParams {
	readonly address: Address;
	readonly password: string;
}

export const registration = (params: AuthParams) => {
	const { address, password } = params;
	return contract.methods.reg_user(keccak256(password)).send({ from: address });
};

export const login = (params: AuthParams): Promise<Auth> => {
	const { address, password } = params;
	return contract.methods
		.login_user(keccak256(password))
		.call({ from: address });
};
