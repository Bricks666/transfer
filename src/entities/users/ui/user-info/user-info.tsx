import { Typography } from '@mui/material';
import * as React from 'react';
import { Address } from 'web3';
import { roleNames } from '@/shared/lib';
import type { CommonProps, Roles } from '@/shared/types';

export interface UserInfoProps extends CommonProps {
	readonly address: Address | null;
	readonly role: Roles;
}

export const UserInfo: React.FC<UserInfoProps> = React.memo(function UserInfo(
	props
) {
	const { address, role, } = props;
	return (
		<section>
			<Typography variant='h5' component='p'>
				Info
			</Typography>
			<Typography>Wallet address: {address}</Typography>
			<Typography>Your role: {roleNames[role]}</Typography>
		</section>
	);
});
