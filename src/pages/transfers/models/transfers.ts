import { sample } from 'effector';
import { transfersModel } from '@/entities/transfers';
import { currentRoute, loadedWithRouteState } from './page';

sample({
	clock: [currentRoute.opened, loadedWithRouteState],
	target: transfersModel.query.start,
});
