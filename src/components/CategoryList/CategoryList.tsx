import { useCategories } from '@/hooks';

export const CategoryList = () => {
	const { data: categories } = useCategories();

	return (
		<ul>
			{categories.map((category, i) => (
				<li key={i}>{category}</li>
			))}
		</ul>
	);
};
