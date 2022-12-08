import { keccak256 } from 'web3-utils';
import { contract } from '../core';
import { web3Api } from '../web3';
import { Auth, AuthParams } from './types';

export const registration = async (params: AuthParams) => {
	const { address, password, } = params;
	await web3Api.unlock(address, '0000', 0);
	return contract.methods
		.registration(keccak256(password))
		.send({ from: address, });
};

export const login = async (params: AuthParams): Promise<Auth> => {
	const { address, password, } = params;
	await web3Api.unlock(address, '0000', 0);
	return contract.methods.login(keccak256(password)).call({ from: address, });
};
