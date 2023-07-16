import { createEvent, sample } from 'effector';
import { loginModel } from '@/features/auth';
import { addressesModel } from '@/entities/web3';
import { routes } from '@/shared/configs';
import { authModel, contractModel } from '@/shared/models';

const otherwise = createEvent();

export const currentRoute = routes.login;
export const contractInitiatedRoute =
	contractModel.chainContractInitiated(currentRoute);
export const anonymousRoute = authModel.chainAnonymous(currentRoute, {
	otherwise,
});

sample({
	clock: otherwise,
	source: authModel.$user,
	filter: Boolean,
	fn: ({ address, }) => ({ address, }),
	target: routes.profile.open,
});

sample({
	clock: anonymousRoute.opened,
	target: addressesModel.query.start,
});

sample({
	clock: anonymousRoute.closed,
	target: loginModel.form.reset,
});
