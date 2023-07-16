import { keccak256 } from 'web3-utils';
import { createRequest } from '../core';
import { web3Api } from '../web3';
import type { Auth, AuthParams, LogoutParams } from './types';

export const registration = createRequest<AuthParams, unknown>(
	async (params) => {
		const { address, password, contract, walletPassword, } = params;
		await web3Api.unlock(address, walletPassword, 0);
		const response = await contract.methods
			.registration(keccak256(password))
			.send({ from: address, });
		await web3Api.lock(address);
		return response;
	}
);

export const login = createRequest<AuthParams, Promise<Auth>>(
	async (params) => {
		const { address, password, contract, walletPassword, } = params;
		await web3Api.unlock(address, walletPassword, 0);
		return contract.methods.login(keccak256(password)).call({ from: address, });
	}
);

export const logout = createRequest<LogoutParams, Promise<boolean>>(
	async (params) => {
		const { sender, } = params;
		return web3Api.lock(sender);
	}
);
