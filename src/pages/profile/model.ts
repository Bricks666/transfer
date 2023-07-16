import { combine, sample } from 'effector';
import { usersModel } from '@/entities/users';
import { routes } from '@/shared/configs';
import { authModel, contractModel } from '@/shared/models';

export const currentRoute = routes.profile;
export const contractInitiatedRoute =
	contractModel.chainContractInitiated(currentRoute);
export const authorizedRoute = authModel.chainAuthorized(
	contractInitiatedRoute,
	{ otherwise: routes.login.open, }
);

export const $currentProfileAddress = authorizedRoute.$params.map(
	(params) => params.address
);

export const $profile = combine(
	usersModel.query.$data,
	$currentProfileAddress,
	(users, address) => {
		return users.find((user) => user.login === address) ?? null;
	}
);

sample({
	clock: authorizedRoute.opened,
	target: usersModel.query.start,
});
