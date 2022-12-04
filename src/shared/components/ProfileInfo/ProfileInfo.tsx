import * as React from 'react';
import { useUnit } from 'effector-react';
import { Balance } from '@/entities/web3';
import { authModel } from '@/shared/models';
import { UserInfo } from '../UserInfo';

export const ProfileInfo: React.FC = () => {
	const info = useUnit(authModel.$user);
	return (
		<div>
			<UserInfo {...info!} />
			<Balance />
		</div>
	);
};
