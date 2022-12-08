import * as React from 'react';
import { CategoryCard, useCategories } from '@/entities/categories';
import { FriendlyList } from '@/shared/ui';

import styles from './CategoryList.module.css';

export const CategoryList: React.FC = () => {
	const { data: categories, pending, } = useCategories();

	return (
		<FriendlyList
			className={styles.list}
			items={categories}
			Component={CategoryCard}
			indexedBy='id'
			isLoading={pending}
		/>
	);
};
