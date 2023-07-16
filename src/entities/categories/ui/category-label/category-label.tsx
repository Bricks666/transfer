import { Typography, TypographyProps } from '@mui/material';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { useCategory } from '../../lib';

export interface CategoryLabelProps
	extends CommonProps,
		Omit<TypographyProps, 'id'> {
	readonly id: number;
}

export const CategoryLabel: React.FC<CategoryLabelProps> = (props) => {
	const { className, id, ...rest } = props;
	const category = useCategory(id);

	if (!category) {
		return null;
	}

	return (
		<Typography
			className={className}
			variant='inherit'
			component='span'
			{...rest}>
			{category.name}
		</Typography>
	);
};
