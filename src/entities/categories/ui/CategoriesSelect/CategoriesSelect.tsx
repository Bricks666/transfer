import { MenuItem } from '@mui/material';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { Field, FieldProps } from '@/shared/ui';
import { useCategories } from '../../lib';

export type CategoriesSelectProps = CommonProps & FieldProps;

export const CategoriesSelect: React.FC<CategoriesSelectProps> = (props) => {
	const { data: categories, } = useCategories();
	const selectId = React.useId();

	return (
		<Field {...props} defaultValue={null} id={selectId} select>
			{categories.map((category, i) => (
				<MenuItem value={i} key={i}>
					{category}
				</MenuItem>
			))}
		</Field>
	);
};
