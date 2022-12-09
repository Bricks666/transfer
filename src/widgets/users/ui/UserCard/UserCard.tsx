import { ButtonGroup } from '@mui/material';
import * as React from 'react';
import { CreateRequestButton } from '@/features/requests';
import { ViewUserProfile } from '@/features/users';
import { TemplateUserCard } from '@/entities/users';
import { User } from '@/shared/api';
import { CommonProps, Roles } from '@/shared/types';

export interface UserCardProps extends CommonProps, User {}

export const UserCard: React.FC<UserCardProps> = (props) => {
	const { login, role, } = props;
	const isAdmin = role === Roles.admin;
	const actions = isAdmin ? null : (
		<ButtonGroup>
			<ViewUserProfile address={login} />
			<CreateRequestButton candidate={login} />
		</ButtonGroup>
	);
	return <TemplateUserCard {...props} actions={actions} />;
};
