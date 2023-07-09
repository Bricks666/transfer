import { createRequest } from '../core';
import type { Category, CreateCategoryParams } from './types';

export const getAll = createRequest(({ contract, }): Promise<Category[]> => {
	return contract.methods.get_categories().call();
});

export const create = createRequest<CreateCategoryParams, unknown>((params) => {
	const { name, sender, contract, } = params;
	return contract.methods.create_category(name).send({ from: sender, });
});
