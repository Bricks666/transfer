import { contract } from '.';

export const getSamplesApi = async () => {
	return contract.methods.get_samples().call();
};

export const addSampleApi = async (sender, name, categoryId, moneyCount) => {
	return contract.methods
		.add_sample(name, categoryId, moneyCount)
		.send({ from: sender });
};
