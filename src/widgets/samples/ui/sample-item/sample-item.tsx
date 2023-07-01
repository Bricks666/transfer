import * as React from 'react';
import { CategoryLabel, useCategory } from '@/entities/categories';
import { TemplateSampleItem } from '@/entities/samples';
import { Sample } from '@/shared/api';
import { CommonProps } from '@/shared/types';

export interface SampleItemProps extends CommonProps, Sample {
	readonly divider?: boolean;
}

export const SampleItem: React.FC<SampleItemProps> = (props) => {
	const { category_id: categoryId, ...rest } = props;
	const category = useCategory(categoryId);

	const categoryLabel = category ? <CategoryLabel {...category} /> : null;
	return <TemplateSampleItem {...rest} category={categoryLabel} />;
};
