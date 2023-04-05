import { Link as MUILink } from '@mui/material';
import { Link } from 'atomic-router-react';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { authModel, OnlyAdmin } from '@/entities/auth';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import styles from './navigation.module.css';
import { NavigationItem } from './types';

const adminsNavigation: NavigationItem[] = [
	{
		to: routes.categories,
		label: 'Категории',
	},
	{
		to: routes.samples,
		label: 'Шаблоны',
	},
	{
		to: routes.requests,
		label: 'Запросы',
	},
	{
		to: routes.users,
		label: 'Пользователи',
	}
];

export const Navigation: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	const address = useUnit(authModel.$address);
	const commonNavigation: NavigationItem[] = React.useMemo(
		() => [
			{
				to: routes.profile,
				params: { address, },
				label: 'Профиль',
			},
			{
				to: routes.transfers,
				label: 'Переводы',
			}
		],
		[address]
	);
	return (
		<nav className={cn(styles.nav, className)}>
			<ul className={styles.list}>
				{commonNavigation.map((item) => (
					<MUILink
						{...item}
						underline='hover'
						variant='body1'
						activeClassName={styles.active}
						component={Link}
						key={item.label}>
						{item.label}
					</MUILink>
				))}
				<OnlyAdmin>
					{adminsNavigation.map((item) => (
						<MUILink
							{...item}
							underline='hover'
							variant='body1'
							activeClassName={styles.active}
							component={Link}
							key={item.label}>
							{item.label}
						</MUILink>
					))}
				</OnlyAdmin>
			</ul>
		</nav>
	);
};
