import { sample } from 'effector';
import { categoriesModel } from '@/entities/categories';

import { routes } from '@/shared/configs';
import { authModel, contractModel } from '@/shared/models';

export const currentRoute = routes.categories;
export const contractInitiatedRoute =
	contractModel.chainContractInitiated(currentRoute);
export const authorizedRoute = authModel.chainAuthorized(
	contractInitiatedRoute,
	{ otherwise: routes.login.open, }
);

sample({
	clock: authorizedRoute.opened,
	target: categoriesModel.query.start,
});
