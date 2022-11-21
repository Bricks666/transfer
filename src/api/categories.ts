import { Address } from '@/types';
import { contract } from './core';

export const getAll = () => {
	return contract.methods.get_categories().call();
};

export interface CreateCategoryParams {
	readonly sender: Address;
	readonly name: string;
}

export const create = (params: CreateCategoryParams) => {
	const { name, sender } = params;
	return contract.methods.create_category(name).send({ from: sender });
};
