import { createContractRequest } from '../core';
import type { CreateSampleParams, Sample } from './types';

export const getAll = createContractRequest(
	({ contract, }): Promise<Sample[]> => {
		return contract.methods.get_samples().call();
	}
);

export const create = createContractRequest<CreateSampleParams, unknown>(
	(params) => {
		const { category_id: categoryId, money, name, sender, contract, } = params;
		return contract.methods
			.create_sample(name, categoryId, money)
			.send({ from: sender, });
	}
);
