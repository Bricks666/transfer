import { MenuItem } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { Field, FieldProps } from '@/shared/ui';
import { categoriesModel } from '../../model';

export type CategoriesSelectProps = CommonProps & FieldProps;

export const CategoriesSelect: React.FC<CategoriesSelectProps> = (props) => {
	const categories = useUnit(categoriesModel.query);

	return (
		<Field label='Категория' {...props} select>
			{categories.data.map(({ id, name, }) => (
				<MenuItem value={id} key={id}>
					{name}
				</MenuItem>
			))}
		</Field>
	);
};
