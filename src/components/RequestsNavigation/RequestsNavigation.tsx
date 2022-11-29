import * as React from 'react';
import { List } from '../List';
import { NavigationItem } from '../NavigationItem';

const navigation = [
	{
		to: 'users',
		label: 'Users',
	},
	{
		to: 'votes',
		label: 'Votes',
	},
];

export const RequestsNavigation: React.FC = () => {
	return <List items={navigation} Card={NavigationItem} indexedBy='to' />;
};
