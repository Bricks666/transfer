import { AppBar, Toolbar } from '@mui/material';
import { useUnit } from 'effector-react';
import { LogoutButton } from '@/features/auth';
import { Navigation } from '@/features/page';
import { authModel } from '@/shared/models';

import styles from './header.module.css';

export const Header = () => {
	const isAuth = useUnit(authModel.$isAuth);
	return (
		<AppBar position='static' color='default' variant='outlined'>
			<Toolbar>
				<Navigation />
				{isAuth ? <LogoutButton className={styles.button} /> : null}
			</Toolbar>
		</AppBar>
	);
};
