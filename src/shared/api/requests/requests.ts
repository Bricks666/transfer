import { contract } from '../core';
import { CreateRequestParams, ChangeRequestParams } from './types';

export const getAll = async (): Promise<Request[]> => {
	return contract.methods.get_requests().call();
};

export const create = (params: CreateRequestParams) => {
	const { sender, candidate, } = params;
	return contract.methods.create_request(candidate).send({ from: sender, });
};

export const accept = async (params: ChangeRequestParams) => {
	const { id, sender, } = params;
	return contract.methods.accept_request(id).send({ from: sender, });
};

export const cancel = async (params: ChangeRequestParams) => {
	const { id, sender, } = params;
	return contract.methods.cancel_request(id).send({ from: sender, });
};
