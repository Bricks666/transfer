import * as React from 'react';
import { CategoryLabel } from '@/entities/categories';
import { TemplateSampleCard } from '@/entities/samples';
import { Sample } from '@/shared/api';
import { CommonProps } from '@/shared/types';

export interface SampleCardProps extends CommonProps, Sample {}

export const SampleCard: React.FC<SampleCardProps> = (props) => {
	const { category_id: categoryId, } = props;
	const category = <CategoryLabel id={categoryId} />;
	return <TemplateSampleCard {...props} category={category} />;
};
