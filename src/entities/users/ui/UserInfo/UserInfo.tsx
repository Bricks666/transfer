import * as React from 'react';
import { Address, CommonProps, Roles } from '@/shared/types';
import { roleNames } from '@/shared/lib';

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
			<h3>Info</h3>
			<p>Login: {login}</p>
			<p>Your role: {roleNames[role]}</p>
		</section>
	);
});
