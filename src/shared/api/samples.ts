import { Sample, CreateSampleParams } from '@/shared/models';
import { contract } from './core';

export const getAll = (): Promise<Sample[]> => {
	return contract.methods.get_samples().call();
};

export const create = (params: CreateSampleParams) => {
	const { category_id: categoryId, money, name, sender } = params;
	return contract.methods
		.create_sample(name, categoryId, money)
		.send({ from: sender });
};
