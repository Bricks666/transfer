import { useCategories, useCategoriesLoading } from '../../hooks';
import { Loading } from '../Loading';

export const CategoriesList = () => {
	const categories = useCategories();
	const isLoading = useCategoriesLoading();

	return (
		<Loading isLoading={isLoading}>
			<ul>
				{categories.map((category, i) => (
					<li key={i}>{category}</li>
				))}
			</ul>
		</Loading>
	);
};
