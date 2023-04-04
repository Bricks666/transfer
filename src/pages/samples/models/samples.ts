import { sample } from 'effector';
import { samplesModel } from '@/entities/samples';
import { currentRoute, loadedWithRouteState } from './page';

sample({
	clock: [currentRoute.opened, loadedWithRouteState],
	target: samplesModel.query.start,
});
