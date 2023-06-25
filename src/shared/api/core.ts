/* eslint-disable no-redeclare */
import Web3, { type Contract, type Address } from 'web3';
import { CONTRACT_NAME, PROVIDER_ADDRESS, abi } from '../configs';
import type { Callback } from '../types';
import { contractsServiceRequest } from './request';

export const web3 = new Web3(PROVIDER_ADDRESS);
export const personal = new Web3.modules.Personal(web3.provider);
let contract: Contract<typeof abi> | null = null;

interface ContractInfo {
	readonly name: string;
	readonly address: Address;
}

export const initContract = async (): Promise<void> => {
	const response = await contractsServiceRequest<ContractInfo>(
		`/${CONTRACT_NAME}`
	);
	contract = new web3.eth.Contract(abi, response.address);
};

type ParamsWithContracts<P extends Record<string, any>> = P & {
	readonly contract: Contract<typeof abi>;
};

export function createContractRequest<R>(
	cb: Callback<ParamsWithContracts<Record<string, never>>, R>
): Callback<void, R>;

export function createContractRequest<P extends Record<string, any>, R>(
	cb: Callback<ParamsWithContracts<P>, R>
): Callback<P, R>;

export function createContractRequest<P extends Record<string, any>, R>(
	cb: any
): Callback<P, R> {
	return (params: any = {}) => {
		if (!contract) {
			throw new Error("Contract wasn't initialized");
		}

		return cb({ ...params, contract, });
	};
}
