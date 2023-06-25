import { useUnit } from 'effector-react';
import * as React from 'react';
import { UserInfo } from '@/entities/users';
import { Balance } from '@/entities/web3';
import { authModel } from '@/shared/models';

export const ProfileInfo: React.FC = () => {
	const info = useUnit(authModel.$user);
	return (
		<div>
			<UserInfo {...info!} />
			<Balance address={info?.address as string} />
		</div>
	);
};
