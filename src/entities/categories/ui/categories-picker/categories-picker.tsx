import { Autocomplete } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import type { Category } from '@/shared/api';
import { usePreparePicker } from '@/shared/lib';
import type { PickerProps } from '@/shared/types';
import { Field, type FieldProps } from '@/shared/ui';
import { categoriesModel } from '../../model';
import { TemplateCategoryItem } from '../template-category-item';

export type CategoriesPickerProps = Omit<
	FieldProps,
	keyof PickerProps<number> | 'multiline' | 'select' | 'type'
> &
	PickerProps<number>;

export const CategoriesPicker: React.FC<CategoriesPickerProps> = (props) => {
	const { onChange, value, multiple, limitTags, className, ...rest } = props;
	const categories = useUnit(categoriesModel.query);

	const options = usePreparePicker({
		options: categories.data,
		mapBeforeChange,
		isSelected,
		onChange,
		value,
		multiple,
	});

	return (
		<Autocomplete
			className={className}
			options={categories.data}
			loading={categories.pending}
			getOptionLabel={getOptionLabel}
			renderInput={(params) => (
				<Field
					{...rest}
					{...params}
					InputProps={{ ...rest.InputProps, ...params.InputProps, }}
				/>
			)}
			renderOption={(props, option) => {
				return <TemplateCategoryItem {...props} {...(option as Category)} />;
			}}
			{...(options as any)}
			limitTags={limitTags}
		/>
	);
};

const getOptionLabel = (option: Category) => {
	return option.name;
};

const mapBeforeChange = (category: Category): number => {
	return category.id;
};

const isSelected = (
	value: Category,
	selected: number | number[] | null
): boolean => {
	if (Array.isArray(selected)) {
		return selected.includes(value.id);
	}

	return selected !== null && selected === value.id;
};
