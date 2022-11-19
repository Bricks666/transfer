import { contract } from '.';

export const getCategoriesApi = async () => {
	return contract.methods.get_categories().call();
};

export const addCategoryApi = async (sender, categoryName) => {
	return contract.methods.add_category(categoryName).send({ from: sender });
};
