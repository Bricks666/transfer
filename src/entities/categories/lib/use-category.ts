import { useStoreMap } from 'effector-react';
import { categoriesModel } from '../model';

export const useCategory = (id: string) => {
	return useStoreMap({
		store: categoriesModel.query.$data,
		fn: (categories, [id]) => categories.find((category) => category.id === id),
		keys: [id],
		defaultValue: null,
	});
};
