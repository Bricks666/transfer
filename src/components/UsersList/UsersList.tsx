import * as React from 'react';
import { FriendlyList } from '../FriendlyList';
import { useUsers } from '@/hooks';
import { CommonProps } from '@/types';
import { UserCard } from './UserCard';

export interface UsersListProps extends CommonProps {}

export const UsersList: React.FC<UsersListProps> = () => {
	const { data: users, pending } = useUsers();

	return (
		<FriendlyList
			items={users}
			Card={UserCard}
			indexedBy='login'
			isLoading={pending}
		/>
	);
};
