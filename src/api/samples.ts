import { Sample, CreateSampleParams } from '@/models';
import { contract } from './core';

export const getAll = (): Promise<Sample[]> => {
	return contract.methods.get_samples().call();
};

export const create = (params: CreateSampleParams) => {
	const { category_id, money, name, sender } = params;
	return contract.methods
		.create_sample(name, category_id, money)
		.send({ from: sender });
};
