import { contract } from '../core';
import { Category, CreateCategoryParams } from './types';

export const getAll = (): Promise<Category[]> => {
	return contract.methods.get_categories().call();
};

export const create = (params: CreateCategoryParams) => {
	const { name, sender, } = params;
	return contract.methods.create_category(name).send({ from: sender, });
};
