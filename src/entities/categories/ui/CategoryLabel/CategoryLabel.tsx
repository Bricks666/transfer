import { Typography, TypographyProps } from '@mui/material';
import * as React from 'react';
import { Category } from '@/shared/api';
import { CommonProps } from '@/shared/types';
import { useCategory } from '../../lib';

export interface CategoryLabelProps
	extends CommonProps,
		Pick<Category, 'id'>,
		Omit<TypographyProps, 'id'> {}

export const CategoryLabel: React.FC<CategoryLabelProps> = (props) => {
	const { id, className, ...rest } = props;
	const { data, } = useCategory(id);
	return (
		<Typography className={className} component='span' {...rest}>
			{data?.name}
		</Typography>
	);
};
