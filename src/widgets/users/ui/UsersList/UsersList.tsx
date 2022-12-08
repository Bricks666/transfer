import { List, ListItem } from '@mui/material';
import * as React from 'react';
import { useUsers } from '@/entities/users';
import { CommonProps } from '@/shared/types';
import { UserCard } from '../UserCard';

import styles from './UsersList.module.css';

export interface UsersListProps extends CommonProps {}

export const UsersList: React.FC<UsersListProps> = () => {
	const { data: users, } = useUsers();

	return (
		<List className={styles.list}>
			{users.map((user) => (
				<ListItem className={styles.item} key={user.login}>
					<UserCard className={styles.card} {...user} />
				</ListItem>
			))}
		</List>
	);
};
