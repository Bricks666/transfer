import { useGate } from 'effector-react';
import { useQuery } from '@farfetched/react';
import { categoriesModel } from '@/models';

export const useCategories = () => {
	useGate(categoriesModel.CategoriesGate);
	return useQuery(categoriesModel.getAllQuery);
};
