import * as React from 'react';
import { List, ListProps } from '../List';

export interface FriendlyListProps<T extends Record<string, any>>
	extends ListProps<T> {
	readonly isLoading: boolean;
	readonly emptyLabel?: string;
}

export const FriendlyList = <T extends Record<string, any>>(
	props: FriendlyListProps<T>
): React.ReactElement => {
	const { items, Component, indexedBy, } = props;
	return <List items={items} Component={Component} indexedBy={indexedBy} />;
};
