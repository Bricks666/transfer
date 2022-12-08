import { List, ListItem } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/shared/types';

import styles from './FriendlyList.module.css';

export interface FriendlyListProps<T extends Record<string, any>>
	extends CommonProps {
	readonly isLoading: boolean;
	readonly items: T[];
	readonly Component: React.ComponentType<T>;
	readonly indexedBy: keyof T;
	readonly emptyLabel?: string;
	readonly itemClassName?: string;
}

export const FriendlyList = <T extends Record<string, any>>(
	props: FriendlyListProps<T>
): React.ReactElement => {
	const { items, Component, indexedBy, className, itemClassName, } = props;
	return (
		<List className={className}>
			{items.map((item) => (
				<ListItem
					className={cn(styles.item, itemClassName)}
					key={item[indexedBy]}>
					<Component {...item} />
				</ListItem>
			))}
		</List>
	);
};
