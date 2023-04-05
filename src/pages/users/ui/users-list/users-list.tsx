import { List, ListItem } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { UserCard } from '@/widgets/users';
import { usersModel } from '@/entities/users';
import { CommonProps } from '@/shared/types';

import styles from './users-list.module.css';

export interface UsersListProps extends CommonProps {}

export const UsersList: React.FC<UsersListProps> = () => {
	const users = useUnit(usersModel.query);

	return (
		<List className={styles.list}>
			{users.data.map((user) => (
				<ListItem className={styles.item} key={user.login}>
					<UserCard className={styles.card} {...user} />
				</ListItem>
			))}
		</List>
	);
};
