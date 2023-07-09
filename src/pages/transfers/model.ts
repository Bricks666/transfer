import { sample } from 'effector';
import { createTransferModel } from '@/features/transfers';
import { categoriesModel } from '@/entities/categories';
import { transfersModel } from '@/entities/transfers';
import { usersModel } from '@/entities/users';
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
		transfersModel.query.start,
		usersModel.query.start
	],
});

sample({
	clock: authorizedRoute.closed,
	target: [createTransferModel.form.reset],
});
