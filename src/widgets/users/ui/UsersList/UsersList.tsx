import * as React from 'react';
import { useUsers } from '@/entities/users';
import { CommonProps } from '@/shared/types';
import { FriendlyList } from '@/shared/ui/FriendlyList';
import { UserCard } from '../UserCard';

export interface UsersListProps extends CommonProps {}

export const UsersList: React.FC<UsersListProps> = () => {
	const { data: users, pending, } = useUsers();

	return (
		<FriendlyList
			items={users}
			Component={UserCard}
			indexedBy='login'
			isLoading={pending}
		/>
	);
};
