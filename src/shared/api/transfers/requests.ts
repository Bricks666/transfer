import { keccak256, toWei } from 'web3-utils';
import { createRequest } from '../core';
import {
	Transfer,
	CreateTransferParams,
	AcceptTransferParams,
	CancelTransferParams
} from './types';

export const getAll = createRequest(({ contract, }): Promise<Transfer[]> => {
	return contract.methods.get_transfers().call();
});

export const getOne = createRequest<{ id: number }, Promise<Transfer>>(
	({ contract, id, }): Promise<Transfer> => {
		return contract.methods.get_transfer(id).call();
	}
);

export const create = createRequest<CreateTransferParams, unknown>((params) => {
	const {
		sender,
		receiver,
		money,
		keyword,
		description,
		contract,
		category_id: categoryId,
	} = params;
	return contract.methods
		.create_transfer(receiver, categoryId, keccak256(keyword), description)
		.send({ from: sender, value: toWei(money, 'ether'), });
});

export const accept = createRequest<AcceptTransferParams, unknown>((params) => {
	const { sender, id, keyword, contract, } = params;
	return contract.methods
		.accept_transfer(id, keccak256(keyword))
		.send({ from: sender, });
});

export const cancel = createRequest<CancelTransferParams, unknown>((params) => {
	const { sender, id, contract, } = params;
	return contract.methods.cancel_transfer(id).send({ from: sender, });
});
