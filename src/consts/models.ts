import { Status } from '@/types';

export const statusNames = {
	[Status.pending]: 'Ожидание',
	[Status.accept]: 'Принята',
	[Status.cancel]: 'Отклонена',
};
