import { Card, CardContent, Typography } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { Sample } from '@/shared/api';
import { CommonProps } from '@/shared/types';

export interface TemplateSampleCardProps
	extends CommonProps,
		Omit<Sample, 'category_id'> {
	readonly category: React.ReactElement;
}

export const TemplateSampleCard: React.FC<TemplateSampleCardProps> = (
	props
) => {
	const { name, category, money, className, } = props;
	return (
		<Card className={cn(className)}>
			<CardContent>
				<Typography>Name: {name}</Typography>
				<Typography>Category: {category}</Typography>
				<Typography>Money count: {money}</Typography>
			</CardContent>
		</Card>
	);
};
