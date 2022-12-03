import { contract } from '../core';
import { CreateSampleParams, Sample } from './types';

export const getAll = (): Promise<Sample[]> => {
	return contract.methods.get_samples().call();
};

export const create = (params: CreateSampleParams) => {
	const { category_id: categoryId, money, name, sender, } = params;
	return contract.methods
		.create_sample(name, categoryId, money)
		.send({ from: sender, });
};
