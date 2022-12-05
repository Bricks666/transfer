import { contract } from '../core';
import { CreateCategoryParams } from './types';

export const getAll = (): Promise<string[]> => {
	return contract.methods.get_categories().call();
};

export const create = (params: CreateCategoryParams) => {
	const { name, sender, } = params;
	return contract.methods.create_category(name).send({ from: sender, });
};