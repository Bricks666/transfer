import { Typography, TypographyProps } from '@mui/material';
import * as React from 'react';
import { Category } from '@/shared/api';
import { CommonProps } from '@/shared/types';

export interface CategoryLabelProps
	extends CommonProps,
		Omit<TypographyProps, 'id'>,
		Category {}

export const CategoryLabel: React.FC<CategoryLabelProps> = (props) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { className, name, id: _, ...rest } = props;

	return (
		<Typography className={className} component='span' {...rest}>
			{name}
		</Typography>
	);
};
