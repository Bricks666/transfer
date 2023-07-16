import {
	Avatar,
	ListItem,
	ListItemAvatar,
	ListItemProps,
	ListItemSecondaryAction,
	ListItemText
} from '@mui/material';
import * as React from 'react';
import { User } from '@/shared/api';
import { roleNames, stringToColor } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { AddressLabel } from '@/shared/ui';

export interface TemplateUserItemProps
	extends CommonProps,
		User,
		Omit<ListItemProps, keyof User | keyof CommonProps> {
	readonly actions?: React.ReactElement | null;
}

export const TemplateUserItem: React.FC<TemplateUserItemProps> = (props) => {
	const { login, role, actions, ...rest } = props;

	const bgcolor = stringToColor(login);

	const primary = <AddressLabel prefix='Адрес: ' address={login} short />;
	const secondary = <span>Роль: {roleNames[role]}</span>;

	return (
		<ListItem {...rest}>
			<ListItemAvatar>
				<Avatar sx={{ bgcolor, }} />
			</ListItemAvatar>
			<ListItemText primary={primary} secondary={secondary} />
			{actions ? (
				<ListItemSecondaryAction>{actions}</ListItemSecondaryAction>
			) : null}
		</ListItem>
	);
};
