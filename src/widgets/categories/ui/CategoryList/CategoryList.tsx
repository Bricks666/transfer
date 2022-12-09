import { List, ListItem } from '@mui/material';
import * as React from 'react';
import { CategoryCard, useCategories } from '@/entities/categories';

import styles from './CategoryList.module.css';

export const CategoryList: React.FC = () => {
	const { data: categories, } = useCategories();

	return (
		<List className={styles.list}>
			{categories.map((category) => (
				<ListItem className={styles.item} key={category.id}>
					<CategoryCard className={styles.card} {...category} />
				</ListItem>
			))}
		</List>
	);
};
