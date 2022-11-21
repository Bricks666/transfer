import { Address } from '@/types';
import { contract } from './core';

export const getAll = () => {
	return contract.methods.get_samples().call();
};

export interface CreateSampleParams {
	readonly sender: Address;
	readonly name: string;
	readonly categoryId: number;
	readonly money: number;
}

export const create = (params: CreateSampleParams) => {
	const { categoryId, money, name, sender } = params;
	return contract.methods
		.create_sample(name, categoryId, money)
		.send({ from: sender });
};
