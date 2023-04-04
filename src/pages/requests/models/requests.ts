import { sample } from 'effector';
import { requestsModel } from '@/entities/requests';
import { currentRoute, loadedWithRouteState } from './page';

sample({
	clock: [currentRoute.opened, loadedWithRouteState],
	target: requestsModel.query.start,
});
