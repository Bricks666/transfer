import { keccak256, toWei } from 'web3-utils';
import { contract } from '../core';
import {
	Transfer,
	CreateTransferParams,
	AcceptTransferParams,
	CancelTransferParams
} from './types';

export const getAll = (): Promise<Transfer[]> => {
	return contract.methods.get_transfers().call();
};

export const getOne = (id: number): Promise<Transfer> => {
	return contract.methods.get_transfer(id).call();
};

export const create = (params: CreateTransferParams) => {
	const {
		sender,
		receiver,
		money,
		keyword,
		description,
		category_id: categoryId,
	} = params;
	return contract.methods
		.create_transfer(receiver, categoryId, keccak256(keyword), description)
		.send({ from: sender, value: toWei(money, 'ether'), });
};

export const accept = (params: AcceptTransferParams) => {
	const { sender, id, keyword, } = params;
	return contract.methods
		.accept_transfer(id, keccak256(keyword))
		.send({ from: sender, });
};

export const cancel = (params: CancelTransferParams) => {
	const { sender, id, } = params;
	return contract.methods.cancel_transfer(id).send({ from: sender, });
};
