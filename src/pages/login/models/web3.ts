import { sample } from 'effector';
import { addressesModel } from '@/entities/web3';
import { currentRoute, loadedWithRouteState } from './page';

sample({
	clock: [currentRoute.opened, loadedWithRouteState],
	target: addressesModel.query.start,
});
