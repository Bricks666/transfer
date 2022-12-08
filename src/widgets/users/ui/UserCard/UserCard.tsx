import * as React from 'react';
import { CreateRequestButton } from '@/features/requests';
import { TemplateUserCard } from '@/entities/users';
import { User } from '@/shared/api';
import { CommonProps } from '@/shared/types';

export interface UserCardProps extends CommonProps, User {}

export const UserCard: React.FC<UserCardProps> = (props) => {
	const { login, } = props;
	return (
		<TemplateUserCard
			{...props}
			actions={<CreateRequestButton candidate={login} />}
		/>
	);
};
