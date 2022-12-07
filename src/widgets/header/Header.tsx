import { useUnit } from 'effector-react';
import { LogoutButton } from '@/features/auth';
import { Navigation } from '@/features/navigation';
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
