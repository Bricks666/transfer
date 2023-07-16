import { Link as MUILink } from '@mui/material';
import { Link } from 'atomic-router-react';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { OnlyAdmin } from '@/entities/auth';
import { authModel } from '@/shared/models';
import { CommonProps } from '@/shared/types';
import { ADMIN_NAVIGATION, createUserNavigation } from '../config';
import { NavigationItem } from '../types';

import styles from './desktop-navigation.module.css';

export const DesktopNavigation: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	const user = useUnit(authModel.$user);
	const commonNavigation = React.useMemo(
		() => createUserNavigation({ address: user?.address ?? null, }),
		[user?.address]
	);
	return (
		<nav className={cn(styles.nav, className)}>
			<ul className={styles.list}>
				{commonNavigation.map((item) => (
					<Item {...item} key={item.label} />
				))}
				<OnlyAdmin>
					{ADMIN_NAVIGATION.map((item) => (
						<Item {...item} key={item.label} />
					))}
				</OnlyAdmin>
			</ul>
		</nav>
	);
};
const Item: React.FC<NavigationItem> = (props) => {
	const { label, } = props;
	return (
		<MUILink
			{...props}
			underline='hover'
			variant='body1'
			activeClassName={styles.active}
			component={Link}>
			{label}
		</MUILink>
	);
};
