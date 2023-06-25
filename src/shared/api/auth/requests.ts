import { keccak256 } from 'web3-utils';
import { createContractRequest } from '../core';
import { web3Api } from '../web3';
import type { Auth, AuthParams } from './types';

export const registration = createContractRequest<AuthParams, unknown>(
	async (params) => {
		const { address, password, contract, } = params;
		await web3Api.unlock(address, '0000', 0);
		return contract.methods
			.registration(keccak256(password))
			.send({ from: address, });
	}
);

export const login = createContractRequest<AuthParams, Promise<Auth>>(
	async (params) => {
		const { address, password, contract, } = params;
		await web3Api.unlock(address, '0000', 0);
		return contract.methods.login(keccak256(password)).call({ from: address, });
	}
);
