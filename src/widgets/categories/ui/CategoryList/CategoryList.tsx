import * as React from 'react';
import { useCategories } from '@/entities/categories';

export const CategoryList: React.FC = () => {
	const { data: categories, } = useCategories();

	return (
		<ul>
			{categories.map((category, i) => (
				<li key={i}>{category}</li>
			))}
		</ul>
	);
};
