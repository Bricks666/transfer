import { Button } from '@mui/material';
import { Link } from 'atomic-router-react';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { authModel, OnlyAdmin } from '@/entities/auth';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import styles from './Navigation.module.css';
import { NavigationItem } from './types';

const adminsNavigation: NavigationItem[] = [
	{
		to: routes.categories,
		label: 'Categories',
	},
	{
		to: routes.samples,
		label: 'Samples',
	},
	{
		to: routes.transfers,
		label: 'Transfers',
	},
	{
		to: routes.requests,
		label: 'Requests',
	},
	{
		to: routes.users,
		label: 'Users',
	}
];

export const Navigation: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	const address = useUnit(authModel.$address);
	const commonNavigation: NavigationItem[] = React.useMemo(
		() => [
			{
				to: routes.transfers,
				label: 'Transfers',
			},
			{
				to: routes.profile,
				params: { address, },
				label: 'Profile',
			}
		],
		[address]
	);
	return (
		<nav className={cn(styles.nav, className)}>
			<ul className={styles.list}>
				{commonNavigation.map((item) => (
					<Button
						className={styles.link}
						{...item}
						component={Link}
						key={item.label}>
						{item.label}
					</Button>
				))}
				<OnlyAdmin>
					{adminsNavigation.map((item) => (
						<Button
							className={styles.link}
							{...item}
							component={Link}
							key={item.label}>
							{item.label}
						</Button>
					))}
				</OnlyAdmin>
			</ul>
		</nav>
	);
};
