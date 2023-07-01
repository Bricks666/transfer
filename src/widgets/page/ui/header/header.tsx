
import { AppBar, Avatar, Container, IconButton, Toolbar } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { AvatarMenu } from '@/features/auth';
import { DesktopNavigation, MobileNavigation } from '@/features/page';

import { Balance } from '@/entities/web3';
import { stringToColor, useToggle } from '@/shared/lib';
import { authModel, deviceInfoModel } from '@/shared/models';
import styles from './header.module.css';

export const Header: React.FC = () => {
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
					{isAuth ? <ProfileInfo /> : null}
				</Toolbar>
			</Container>
		</AppBar>
	);
};

const ProfileInfo: React.FC = () => {
	const user = useUnit(authModel.$user)!;
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
		null
	);
	const [opened, handlers] = useToggle();

	const menuId = React.useId();

	return (
		<div className={styles.button}>
			<Balance address={user.address} />
			<IconButton
				onClick={handlers.toggle}
				aria-controls={opened ? menuId : undefined}
				aria-haspopup='true'
				aria-expanded={opened ? 'true' : undefined}
				ref={setAnchorEl}>
				<Avatar sx={{ bgcolor: stringToColor(user.address), }} />
			</IconButton>
			<AvatarMenu
				opened={opened}
				anchorEl={anchorEl}
				onClose={handlers.toggleOff}
				id={menuId}
			/>
		</div>
	);
};
