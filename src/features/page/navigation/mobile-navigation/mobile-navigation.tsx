import MenuIcon from '@mui/icons-material/Menu';
import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText
} from '@mui/material';
import { Link } from 'atomic-router-react';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { OnlyAdmin } from '@/entities/auth';
import { useToggle } from '@/shared/lib';
import { authModel } from '@/shared/models';
import { CommonProps } from '@/shared/types';
import { ADMIN_NAVIGATION, createUserNavigation } from '../config';
import { NavigationItem } from '../types';

import styles from './mobile-navigation.module.css';

export const MobileNavigation: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	const [opened, handlers] = useToggle();

	const user = useUnit(authModel.$user);
	const commonNavigation = React.useMemo(
		() => createUserNavigation({ address: user?.address ?? null, }),
		[user?.address]
	);

	return (
		<>
			<IconButton className={className} onClick={handlers.toggle}>
				<MenuIcon />
			</IconButton>
			<Drawer open={opened} onClose={handlers.toggleOff}>
				<List className={styles.list}>
					{commonNavigation.map((item) => (
						<Item {...item} key={item.label} />
					))}
					<OnlyAdmin>
						{ADMIN_NAVIGATION.map((item) => (
							<Item {...item} key={item.label} />
						))}
					</OnlyAdmin>
				</List>
			</Drawer>
		</>
	);
};

const Item: React.FC<NavigationItem> = (props) => {
	const { label, to, params, query, } = props;
	return (
		<ListItem disablePadding>
			<ListItemButton
				activeClassName={styles.active}
				to={to}
				params={params}
				query={query}
				component={Link}>
				<ListItemText primaryTypographyProps={{ className: styles.text, }}>
					{label}
				</ListItemText>
			</ListItemButton>
		</ListItem>
	);
};
