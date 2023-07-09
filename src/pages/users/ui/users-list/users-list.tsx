import { useUnit } from 'effector-react';
import * as React from 'react';
import { UserItem } from '@/widgets/users';
import { usersModel } from '@/entities/users';
import { CommonProps } from '@/shared/types';
import { BorderedList } from '@/shared/ui';

export interface UsersListProps extends CommonProps {}

export const UsersList: React.FC<UsersListProps> = (props) => {
	const { className, } = props;
	const users = useUnit(usersModel.query);

	return (
		<BorderedList className={className} variant='outlined' elevation={0}>
			{users.data.map((user) => (
				<UserItem {...user} key={user.login} />
			))}
		</BorderedList>
	);
};
