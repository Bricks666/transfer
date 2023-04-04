import { List, ListItem } from '@mui/material';
import * as React from 'react';
import { CategoryCard, useCategories } from '@/entities/categories';

import styles from './categories-list.module.css';

export const CategoryList: React.FC = () => {
	const categories = useCategories();

	return (
		<List className={styles.list}>
			{categories.data.map((category) => (
				<ListItem className={styles.item} key={category.id}>
					<CategoryCard className={styles.card} {...category} />
				</ListItem>
			))}
		</List>
	);
};
