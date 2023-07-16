import { sample } from 'effector';
import { usersModel } from '@/entities/users';
import { routes } from '@/shared/configs';
import { authModel, contractModel } from '@/shared/models';

export const currentRoute = routes.users;
export const contractInitiatedRoute =
	contractModel.chainContractInitiated(currentRoute);
export const authorizedRoute = authModel.chainAuthorized(
	contractInitiatedRoute,
	{ otherwise: routes.login.open, }
);

sample({
	clock: authorizedRoute.opened,
	target: usersModel.query.start,
});
