import * as React from 'react';
import { Sample } from '@/shared/api';
import { CommonProps } from '@/shared/types';

export interface SampleCardProps extends CommonProps, Sample {}

export const SampleCard: React.FC<SampleCardProps> = (props) => {
	const { name, category_id: categoryId, money, } = props;
	return (
		<article>
			<p>Name: {name}</p>
			<p>Category: {categoryId}</p>
			<p>Money count: {money}</p>
		</article>
	);
};
