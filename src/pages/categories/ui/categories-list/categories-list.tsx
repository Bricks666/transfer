import { useUnit } from 'effector-react';
import * as React from 'react';
import { TemplateCategoryItem, categoriesModel } from '@/entities/categories';
import { CommonProps } from '@/shared/types';
import { BorderedList } from '@/shared/ui';

export const CategoryList: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	const categories = useUnit(categoriesModel.query);

	return (
		<BorderedList className={className}>
			{categories.data.map((category) => (
				<TemplateCategoryItem {...category} divider key={category.id} />
			))}
		</BorderedList>
	);
};
