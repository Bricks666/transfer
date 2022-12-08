import { Card, CardActions, CardContent } from '@mui/material';
import * as React from 'react';
import { User } from '@/shared/api';
import { CommonProps } from '@/shared/types';
import { UserInfo } from '../UserInfo';

export interface TemplateUserCardProps extends CommonProps, User {
	readonly actions?: React.ReactElement | null;
}

export const TemplateUserCard: React.FC<TemplateUserCardProps> = (props) => {
	const { login, role, className, actions, } = props;
	return (
		<Card className={className}>
			<CardContent>
				<UserInfo login={login} role={role} />
			</CardContent>
			<CardActions>{actions}</CardActions>
		</Card>
	);
};
