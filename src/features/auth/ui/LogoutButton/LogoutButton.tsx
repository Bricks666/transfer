import { Button } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { logoutModel } from '../../model';

export const LogoutButton: React.FC = React.memo(function LoginForm() {
	const logout = useUnit(logoutModel.logoutFx);

	return (
		<Button onClick={() => logout()} htmlType='button'>
			Logout
		</Button>
	);
});
