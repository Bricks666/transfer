import { sample } from 'effector';
import { usersModel } from '@/entities/users';
import { currentRoute, loadedWithRouteState } from './page';

sample({
	clock: [currentRoute.opened, loadedWithRouteState],
	target: usersModel.query.start,
});
