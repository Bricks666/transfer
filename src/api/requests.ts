import { Address } from '@/types';
import { contract } from './core';

export const getAll = async () => {
	return contract.methods.get_offers().call();
};

export interface CreateRequestParams {
	readonly sender: Address;
	readonly candidate: Address;
}

export const create = (params: CreateRequestParams) => {
	const { sender, candidate } = params;
	return contract.methods.create_request(candidate).send({ from: sender });
};

export interface ChangeRequestParams {
	readonly sender: Address;
	readonly id: number;
}

export const accept = async (params: ChangeRequestParams) => {
	const { id, sender } = params;
	return contract.methods.accept_request(id).send({ from: sender });
};

export const cancel = async (params: ChangeRequestParams) => {
	const { id, sender } = params;
	return contract.methods.cancel_request(id).send({ from: sender });
};
