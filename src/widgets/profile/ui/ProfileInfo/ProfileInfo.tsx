import { useUnit } from 'effector-react';
import * as React from 'react';
import { authModel } from '@/entities/auth';
import { UserInfo } from '@/entities/users';
import { Balance } from '@/entities/web3';

export const ProfileInfo: React.FC = () => {
	const info = useUnit(authModel.$user);
	return (
		<div>
			<UserInfo {...info!} />
			<Balance address={info.login!} />
		</div>
	);
};
