import * as React from 'react';
import { CreateRequestButton } from '@/features/requests';
import { TemplateUserCard } from '@/entities/users';
import { CommonProps } from '@/shared/types';
import { User } from '@/shared/api';

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
