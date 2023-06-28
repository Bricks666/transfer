import { sample } from 'effector';
import { categoriesModel } from '@/entities/categories';
import { transfersModel } from '@/entities/transfers';
import { addressesModel } from '@/entities/web3';
import { routes } from '@/shared/configs';
import { authModel, contractModel } from '@/shared/models';

export const currentRoute = routes.transfers;
export const contractInitiatedRoute =
	contractModel.chainContractInitiated(currentRoute);
export const authorizedRoute = authModel.chainAuthorized(
	contractInitiatedRoute,
	{ otherwise: routes.login.open, }
);

sample({
	clock: authorizedRoute.opened,
	target: [
		categoriesModel.query.start,
		addressesModel.query.start,
		transfersModel.query.start
	],
});
