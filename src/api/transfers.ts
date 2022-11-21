import { keccak256, toWei } from 'web3-utils';
import { Address } from '@/types';
import { contract } from './core';

export const getAll = () => {
	return contract.methods.get_transfers().call();
};

export const getOne = (id: number) => {
	return contract.methods.get_transfer(id).call();
};

export interface CreateTransferParams {
	readonly sender: Address;
	readonly receiver: Address;
	readonly categoryId: number;
	readonly keyword: string;
	readonly description: string;
	readonly value: number;
}

export const create = (params: CreateTransferParams) => {
	const { sender, receiver, value, keyword, description, categoryId } = params;
	return contract.methods
		.create_transfer(receiver, categoryId, keccak256(keyword), description)
		.send({ from: sender, value: toWei(value.toString(), 'wei') });
};

export interface AcceptTransferParams {
	readonly sender: Address;
	readonly id: number;
	readonly keyword: string;
}

export const accept = (params: AcceptTransferParams) => {
	const { sender, id, keyword } = params;
	return contract.methods.accept_transfer(id, keyword).send({ from: sender });
};

export interface CancelTransferParams {
	readonly sender: Address;
	readonly id: number;
}

export const cancel = (params: CancelTransferParams) => {
	const { sender, id } = params;
	return contract.methods.cancel_transfer(id).send({ from: sender });
};
