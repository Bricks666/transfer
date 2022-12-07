import * as React from 'react';
import { useUnit } from 'effector-react';
import { logoutModel } from '../../model';

export const LogoutButton: React.FC = React.memo(function LoginForm() {
	const logout = useUnit(logoutModel.logoutFx);

	return (
		<button onClick={() => logout()} type='button'>
			Logout
		</button>
	);
});
