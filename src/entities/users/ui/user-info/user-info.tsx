import { Typography } from '@mui/material';
import * as React from 'react';
import { roleNames } from '@/shared/lib';
import { Address, CommonProps, Roles } from '@/shared/types';

export interface UserInfoProps extends CommonProps {
	readonly login: Address | null;
	readonly role: Roles;
}

export const UserInfo: React.FC<UserInfoProps> = React.memo(function UserInfo(
	props
) {
	const { login, role, } = props;
	return (
		<section>
			<Typography variant='h5' component='p'>
				Info
			</Typography>
			<Typography>Login: {login}</Typography>
			<Typography>Your role: {roleNames[role]}</Typography>
		</section>
	);
});
