import { useMemo } from 'react';
import { useCategories } from '.';

export const useCategoriesMap = () => {
	const { data: categories } = useCategories();

	return useMemo(() => {
		return categories!.reduce(
			(map, category, i) => ((map[i] = category), map),
			{}
		);
	}, [categories]);
};
