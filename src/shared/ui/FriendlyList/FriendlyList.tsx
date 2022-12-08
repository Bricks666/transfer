import { List, ListItem } from '@mui/material';
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
}

export const FriendlyList = <T extends Record<string, any>>(
	props: FriendlyListProps<T>
): React.ReactElement => {
	const { items, Component, indexedBy, className, } = props;
	return (
		<List className={className}>
			{items.map((item) => (
				<ListItem className={styles.item} key={item[indexedBy]}>
					<Component {...item} />
				</ListItem>
			))}
		</List>
	);
};
