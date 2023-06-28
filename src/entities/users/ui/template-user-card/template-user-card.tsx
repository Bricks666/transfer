import { Card, CardActions, CardContent } from '@mui/material';
import * as React from 'react';
import { User } from '@/shared/api';
import { CommonProps } from '@/shared/types';
import { UserInfo } from '../user-info';

export interface TemplateUserCardProps extends CommonProps, User {
	readonly actions?: React.ReactElement | null;
}

export const TemplateUserCard: React.FC<TemplateUserCardProps> = (props) => {
	const { login, role, className, actions, } = props;
	return (
		<Card className={className}>
			<CardContent>
				<UserInfo address={login} role={role} />
			</CardContent>
			{actions ? <CardActions>{actions}</CardActions> : null}
		</Card>
	);
};
