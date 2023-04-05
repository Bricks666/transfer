import { List, ListItem } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { CategoryCard, categoriesModel } from '@/entities/categories';

import styles from './categories-list.module.css';

export const CategoryList: React.FC = () => {
	const categories = useUnit(categoriesModel.query);

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
