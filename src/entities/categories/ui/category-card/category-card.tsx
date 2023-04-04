import { Card, CardContent, Typography } from '@mui/material';
import * as React from 'react';
import { Category } from '@/shared/api';
import { CommonProps } from '@/shared/types';

export interface CategoryCardProps extends CommonProps, Category {}

export const CategoryCard: React.FC<CategoryCardProps> = (props) => {
	const { className, name, } = props;
	return (
		<Card className={className}>
			<CardContent>
				<Typography>{name}</Typography>
			</CardContent>
		</Card>
	);
};
