import { useQuery } from '@farfetched/react';
import { useGate } from 'effector-react';
import { categoriesModel } from '../model';

export const useCategories = () => {
	useGate(categoriesModel.CategoriesGate);
	return useQuery(categoriesModel.getAllQuery);
};
