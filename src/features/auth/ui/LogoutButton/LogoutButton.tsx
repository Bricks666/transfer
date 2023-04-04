import { Button } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { logoutModel } from '../../model';

export const LogoutButton: React.FC<CommonProps> = React.memo(
	function LoginForm(props) {
		const { className, } = props;
		const logout = useUnit(logoutModel.logoutFx);

		return (
			<Button className={className} onClick={logout} type='button'>
				Logout
			</Button>
		);
	}
);
