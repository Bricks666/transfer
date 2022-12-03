import { Status, Roles } from '@/shared/types';

export const statusNames = {
	[Status.pending]: 'Ожидание',
	[Status.accept]: 'Принята',
	[Status.cancel]: 'Отклонена',
};

export const roleNames = {
	[Roles.admin]: 'Администратор',
	[Roles.user]: 'Пользователь',
};
