import { useCategories } from '@/hooks';
import { Loading } from '../Loading';

export const CategoryList = () => {
	const { data: categories, pending } = useCategories();

	return (
		<Loading isLoading={pending}>
			<ul>
				{categories!.map((category, i) => (
					<li key={i}>{category}</li>
				))}
			</ul>
		</Loading>
	);
};
