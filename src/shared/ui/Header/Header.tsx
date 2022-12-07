import { useUnit } from 'effector-react';
import { Navigation } from '../Navigation';
import { LogoutButton } from '@/features/auth';
import { authModel } from '@/entities/auth';

export const Header = () => {
	const isAuth = useUnit(authModel.$isAuth);
	return (
		<header>
			<Navigation />
			{isAuth ? <LogoutButton /> : null}
		</header>
	);
};
