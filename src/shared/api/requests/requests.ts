import { createRequest } from '../core';
import type {
	CreateRequestParams,
	ChangeRequestParams,
	Request
} from './types';

export const getAll = createRequest(({ contract, }): Promise<Request[]> => {
	return contract.methods.get_requests().call();
});

export const create = createRequest<CreateRequestParams, unknown>((params) => {
	const { sender, candidate, contract, } = params;
	return contract.methods.create_request(candidate).send({ from: sender, });
});

export const accept = createRequest<ChangeRequestParams, unknown>((params) => {
	const { id, sender, contract, } = params;
	return contract.methods.accept_request(id).send({ from: sender, });
});

export const cancel = createRequest<ChangeRequestParams, unknown>((params) => {
	const { id, sender, contract, } = params;
	return contract.methods.cancel_request(id).send({ from: sender, });
});
