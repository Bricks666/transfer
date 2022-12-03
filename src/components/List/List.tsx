import * as React from 'react';
import { CommonProps } from '@/types';

export interface ListProps<T extends Record<string, any>> extends CommonProps {
	readonly Component: React.ComponentType<T>;
	readonly items: T[];
	readonly indexedBy: keyof T;
}

export const List = <T extends Record<string, any>>(
	props: ListProps<T>
): React.ReactElement => {
	const { Component, items, indexedBy } = props;
	return (
		<ul>
			{items.map((item) => (
				<li key={item[indexedBy]}>
					<Component {...item} />
				</li>
			))}
		</ul>
	);
};
