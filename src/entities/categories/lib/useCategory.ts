import { useMemo } from 'react';
import { useCategories } from './useCategories';

export const useCategory = (id: string) => {
	const { data, ...rest } = useCategories();
	const category = useMemo(() => {
		return data.find((category) => category.id === id) ?? null;
	}, [data, id]);
	return { data: category, ...rest, };
};
