import { AppBar, Container, Toolbar } from '@mui/material';
import { useUnit } from 'effector-react';
import { LogoutButton } from '@/features/auth';
import { DesktopNavigation, MobileNavigation } from '@/features/page';
import { authModel, deviceInfoModel } from '@/shared/models';

import styles from './header.module.css';

export const Header = () => {
	const isAuth = useUnit(authModel.$isAuth);
	const [isDesktop, isSmallDesktop] = useUnit([
		deviceInfoModel.$isDesktop,
		deviceInfoModel.$isSmallDesktop
	]);
	const showDesktopNavigation = isDesktop || isSmallDesktop;

	return (
		<AppBar position='static' color='default' variant='outlined'>
			<Container>
				<Toolbar>
					{showDesktopNavigation ? <DesktopNavigation /> : <MobileNavigation />}
					{isAuth ? <LogoutButton className={styles.button} /> : null}
				</Toolbar>
			</Container>
		</AppBar>
	);
};
