import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ListItemIcon, MenuItem } from '@mui/material';
import { Link } from 'atomic-router-react';
import * as React from 'react';
import type { Address } from 'web3';
import { routes } from '@/shared/configs';
import type { CommonProps } from '@/shared/types';

export interface OpenUserProfileItemProps extends CommonProps {
	readonly address: Address;
}

export const OpenUserProfileItem: React.FC<OpenUserProfileItemProps> = (
	props
) => {
	const { className, address, } = props;

	return (
		<MenuItem
			className={className}
			to={routes.profile as any}
			params={{ address, }}
			component={Link}>
			<ListItemIcon>
				<AccountCircleIcon />
			</ListItemIcon>
			Открыть профиль
		</MenuItem>
	);
};
