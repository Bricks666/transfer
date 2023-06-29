import { Typography, TypographyProps } from '@mui/material';
import * as React from 'react';
import { Category } from '@/shared/api';
import { CommonProps } from '@/shared/types';

export interface CategoryLabelProps
	extends CommonProps,
		Omit<TypographyProps, 'id'>,
		Omit<Category, 'id'> {}

export const CategoryLabel: React.FC<CategoryLabelProps> = (props) => {
	const { className, name, ...rest } = props;

	return (
		<Typography
			className={className}
			variant='inherit'
			component='span'
			{...rest}>
			{name}
		</Typography>
	);
};
