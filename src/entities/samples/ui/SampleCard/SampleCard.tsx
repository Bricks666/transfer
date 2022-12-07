import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { Sample } from '@/shared/api';

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
