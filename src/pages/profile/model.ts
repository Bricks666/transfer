import { routes } from '@/shared/configs';
import { authModel, contractModel } from '@/shared/models';

export const currentRoute = routes.profile;
export const contractInitiatedRoute =
	contractModel.chainContractInitiated(currentRoute);
export const authorizedRoute = authModel.chainAuthorized(
	contractInitiatedRoute,
	{ otherwise: routes.login.open, }
);
