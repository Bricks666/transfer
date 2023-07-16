import { Address } from 'web3';
import { routes } from '@/shared/configs';
import { NavigationItem } from './types';

export const ADMIN_NAVIGATION: NavigationItem[] = [
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

export const createUserNavigation = ({
	address,
}: {
	address: Address | null;
}): NavigationItem[] => {
	return [
		{
			to: routes.profile,
			params: { address, },
			label: 'Профиль',
		},
		{
			to: routes.transfers,
			label: 'Переводы',
		}
	];
};
