import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton, Tooltip } from '@mui/material';
import { Link } from 'atomic-router-react';
import * as React from 'react';
import type { Address } from 'web3';
import { routes } from '@/shared/configs';
import type { CommonProps } from '@/shared/types';

export interface ViewUserProfileProps extends CommonProps {
	readonly address: Address;
}

export const ViewUserProfile: React.FC<ViewUserProfileProps> = (props) => {
	const { className, address, } = props;

	return (
		<Tooltip title='Открыть профиль пользователя'>
			<IconButton
				className={className}
				to={routes.profile as any}
				params={{ address, }}
				component={Link}>
				<AccountCircleIcon />
			</IconButton>
		</Tooltip>
	);
};
