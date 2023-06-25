import { createContractRequest } from '../core';
import type { Category, CreateCategoryParams } from './types';

export const getAll = createContractRequest(
	({ contract, }): Promise<Category[]> => {
		return contract.methods.get_categories().call();
	}
);

export const create = createContractRequest<CreateCategoryParams, unknown>(
	(params) => {
		const { name, sender, contract, } = params;
		return contract.methods.create_category(name).send({ from: sender, });
	}
);
