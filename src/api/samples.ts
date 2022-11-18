import { contract } from '.';

export const getSamplesApi = async () => {
	return await contract.methods.get_samples().call();
};

export const addSampleApi = async (sender, name, categoryId, moneyCount) => {
	return await contract.methods
		.add_sample(name, categoryId, moneyCount)
		.send({ from: sender });
};
