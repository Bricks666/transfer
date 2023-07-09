import { toWei } from 'web3-utils';
import { createRequest } from '../core';
import type { CreateSampleParams, Sample } from './types';

export const getAll = createRequest(({ contract, }) => {
	return contract.methods.get_samples().call<Sample[]>();
});

export const create = createRequest<CreateSampleParams, unknown>((params) => {
	const { category_id: categoryId, money, name, sender, contract, } = params;
	return contract.methods
		.create_sample(name, categoryId, toWei(money, 'ether'))
		.send({ from: sender, });
});
