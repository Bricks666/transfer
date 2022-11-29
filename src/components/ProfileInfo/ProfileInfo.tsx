import * as React from 'react';
import { useUnit } from 'effector-react';
import { authModel } from '@/models';
import { UserInfo } from '../UserInfo';
import { Balance } from '../Balance';

export const ProfileInfo: React.FC = () => {
	const info = useUnit(authModel.$user);
	return (
		<div>
			<UserInfo {...info!} />
			<Balance />
		</div>
	);
};
