import { List, Paper } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { UserItem } from '@/widgets/users';
import { usersModel } from '@/entities/users';
import { CommonProps } from '@/shared/types';

export interface UsersListProps extends CommonProps {}

export const UsersList: React.FC<UsersListProps> = (props) => {
	const { className, } = props;
	const users = useUnit(usersModel.query);

	return (
		<Paper className={className} variant='outlined' elevation={0}>
			<List disablePadding>
				{users.data.map((user) => (
					<UserItem {...user} key={user.login} />
				))}
			</List>
		</Paper>
	);
};
