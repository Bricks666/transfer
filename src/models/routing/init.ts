import { redirect } from 'atomic-router';
import { sample } from 'effector';
import { not } from 'patronum';
import { authModel } from '../auth';
import { routes } from './units';

redirect({
	clock: authModel.loginMutation.finished.success,
	params: ({ data }) => ({ address: data.login }),
	route: routes.profile,
});

const notAuth = sample({
	source: not(authModel.$isAuth),
	filter: Boolean,
});

redirect({
	clock: [authModel.logoutFx.doneData, notAuth],
	route: routes.login,
});

redirect({
	clock: authModel.registrationMutation.finished.success,
	route: routes.registration,
});
