import { sample } from 'effector';
import { categoriesModel } from '@/entities/categories';
import { currentRoute, loadedWithRouteState } from './page';

sample({
	clock: [currentRoute.opened, loadedWithRouteState],
	target: categoriesModel.query.start,
});
