import { AppBar, Toolbar } from '@mui/material';
import { useUnit } from 'effector-react';
import { LogoutButton } from '@/features/auth';
import { Navigation } from '@/features/navigation';
import { authModel } from '@/entities/auth';

import styles from './Header.module.css';

export const Header = () => {
	const isAuth = useUnit(authModel.$isAuth);
	return (
		<AppBar className={styles.header} position='static' color='transparent'>
			<Toolbar>
				<Navigation />
				{isAuth ? <LogoutButton className={styles.button} /> : null}
			</Toolbar>
		</AppBar>
	);
};
