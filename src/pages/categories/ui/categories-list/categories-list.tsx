import { List, Paper } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { TemplateCategoryItem, categoriesModel } from '@/entities/categories';

export const CategoryList: React.FC = () => {
	const categories = useUnit(categoriesModel.query);

	return (
		<Paper variant='outlined' elevation={0}>
			<List disablePadding>
				{categories.data.map((category) => (
					<TemplateCategoryItem {...category} divider key={category.id} />
				))}
			</List>
		</Paper>
	);
};
