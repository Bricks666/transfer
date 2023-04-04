import { useGate, useUnit } from 'effector-react';
import { categoriesModel } from '../model';

export const useCategories = () => {
	useGate(categoriesModel.CategoriesGate);
	return useUnit(categoriesModel.getAllQuery);
};
