import * as React from 'react';
import { CategoryLabel } from '@/entities/categories';
import { TemplateSampleItem } from '@/entities/samples';
import { Sample } from '@/shared/api';
import type { CommonProps } from '@/shared/types';

export interface SampleItemProps extends CommonProps, Sample {
	readonly divider?: boolean;
}

export const SampleItem: React.FC<SampleItemProps> = (props) => {
	const { category_id: categoryId, ...rest } = props;

	return (
		<TemplateSampleItem
			{...rest}
			category={<CategoryLabel id={categoryId} />}
		/>
	);
};
