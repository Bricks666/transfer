import * as React from 'react';
import { CreateRequestButton } from '@/features/requests';
import { ViewUserProfile } from '@/features/users';
import { TemplateUserItem } from '@/entities/users';
import type { User } from '@/shared/api';
import { type CommonProps, Roles } from '@/shared/types';

export interface UserItemProps extends CommonProps, User {}

export const UserItem: React.FC<UserItemProps> = (props) => {
	const { login, role, } = props;
	const isAdmin = role === Roles.admin;
	const actions = isAdmin ? null : (
		<>
			<ViewUserProfile address={login} />
			<CreateRequestButton candidate={login} />
		</>
	);
	return <TemplateUserItem {...props} actions={actions} />;
};
