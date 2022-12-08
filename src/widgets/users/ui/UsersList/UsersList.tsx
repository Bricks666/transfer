import * as React from 'react';
import { useUsers } from '@/entities/users';
import { CommonProps } from '@/shared/types';
import { FriendlyList } from '@/shared/ui/FriendlyList';
import { UserCard } from '../UserCard';

import styles from './UsersList.module.css';

export interface UsersListProps extends CommonProps {}

export const UsersList: React.FC<UsersListProps> = () => {
	const { data: users, pending, } = useUsers();

	return (
		<FriendlyList
			className={styles.list}
			items={users}
			Component={UserCard}
			indexedBy='login'
			isLoading={pending}
		/>
	);
};
