import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { User } from '@/shared/api';
import { UserInfo } from '../UserInfo';

export interface TemplateUserCardProps extends CommonProps, User {
	readonly actions?: React.ReactElement | null;
}

export const TemplateUserCard: React.FC<TemplateUserCardProps> = (props) => {
	const { login, role, className, actions, } = props;
	return (
		<article className={className}>
			<UserInfo login={login} role={role} />
			{actions}
		</article>
	);
};
