import { Paper, Typography } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { Address } from 'web3';
import { Balance } from '@/entities/web3';
import { roleNames } from '@/shared/lib';
import { deviceInfoModel } from '@/shared/models';
import type { CommonProps, Roles } from '@/shared/types';
import { AddressLabel } from '@/shared/ui';

import styles from './user-info.module.css';

export interface UserInfoProps extends CommonProps {
	readonly address: Address;
	readonly role: Roles;
}

export const UserInfo: React.FC<UserInfoProps> = React.memo(function UserInfo(
	props
) {
	const { address, role, className, } = props;

	const [isMobile, isVertical] = useUnit([
		deviceInfoModel.$isMobile,
		deviceInfoModel.$isTabletVertical
	]);

	const shortAddress = isMobile || isVertical;

	const addressLabel = <AddressLabel address={address} short={shortAddress} />;

	return (
		<Paper
			className={cn(styles.wrapper, className)}
			variant='outlined'
			elevation={0}
			component='article'>
			<Typography variant='h5' component='p'>
				Информация о пользователе
			</Typography>
			<Typography>Адрес аккаунта: {addressLabel}</Typography>
			<Typography>Роль: {roleNames[role]}</Typography>
			<Typography>
				Баланс: <Balance address={address} />
			</Typography>
		</Paper>
	);
});
