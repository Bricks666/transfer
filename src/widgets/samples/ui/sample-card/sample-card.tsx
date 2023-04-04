import * as React from 'react';
import { CategoryLabel, useCategory } from '@/entities/categories';
import { TemplateSampleCard } from '@/entities/samples';
import { Sample } from '@/shared/api';
import { CommonProps } from '@/shared/types';

export interface SampleCardProps extends CommonProps, Sample {}

export const SampleCard: React.FC<SampleCardProps> = (props) => {
	const { category_id: categoryId, } = props;
	const category = useCategory(categoryId);

	const categoryLabel = category ? <CategoryLabel {...category} /> : null;
	return <TemplateSampleCard {...props} category={categoryLabel} />;
};
