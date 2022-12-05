import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { useCategories } from '../../lib';

export interface CategoriesSelectProps
	extends CommonProps,
		React.SelectHTMLAttributes<HTMLSelectElement> {
	readonly label?: string;
}

export const CategoriesSelect: React.FC<CategoriesSelectProps> = (props) => {
	const { label, className, ...rest } = props;
	const { data: categories, } = useCategories();
	const selectId = React.useId();

	return (
		<div className={className}>
			{label ? <label htmlFor={selectId}>{label}</label> : null}
			<select {...rest} id={selectId}>
				{categories.map((category, i) => (
					<option value={i} key={i}>
						{category}
					</option>
				))}
			</select>
		</div>
	);
};
