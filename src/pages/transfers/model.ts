import { sample } from 'effector';
import {
	createTransferBySampleModel,
	createTransferSimpleModel
} from '@/features/transfers';
import { categoriesModel } from '@/entities/categories';
import { samplesModel } from '@/entities/samples';
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
		usersModel.query.start,
		samplesModel.query.start
	],
});

sample({
	clock: authorizedRoute.closed,
	target: [
		createTransferSimpleModel.form.reset,
		createTransferBySampleModel.form.reset
	],
});
