import { toWei } from 'web3-utils';
import { createContractRequest } from '../core';
import type { CreateSampleParams, Sample } from './types';

export const getAll = createContractRequest(({ contract, }) => {
	return contract.methods.get_samples().call<Sample[]>();
});

export const create = createContractRequest<CreateSampleParams, unknown>(
	(params) => {
		const { category_id: categoryId, money, name, sender, contract, } = params;
		return contract.methods
			.create_sample(name, categoryId, toWei(money, 'ether'))
			.send({ from: sender, });
	}
);
