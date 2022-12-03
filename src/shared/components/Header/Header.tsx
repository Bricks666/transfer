import { useUnit } from 'effector-react';
import { authModel } from '@/shared/models';
import { Navigation } from '../Navigation';

export const Header = () => {
	const isAuth = useUnit(authModel.$isAuth);
	const logout = useUnit(authModel.logoutFx);

	return (
		<header>
			<Navigation />
			{isAuth ? (
				<button type='button' onClick={logout}>
					Logout
				</button>
			) : null}
		</header>
	);
};
