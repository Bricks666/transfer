import { contract } from ".";

export const getCategoriesApi = async () => {
	return await contract.methods.get_categories().call();
};

export const addCategoryApi = async (sender, categoryName) => {
	return await contract.methods
		.add_category(categoryName)
		.send({ from: sender });
};
