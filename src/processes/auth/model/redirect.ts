import { redirect } from 'atomic-router';
import { combine, Store } from 'effector';
import { loginModel, logoutModel, registrationModel } from '@/features/auth';
import { authModel } from '@/entities/auth';
import { routes } from '@/shared/configs';

redirect({
	clock: registrationModel.registrationMutation.finished.success,
	route: routes.login,
});

redirect({
	clock: loginModel.loginMutation.finished.success,
	params: ({ result, }) => ({ address: result.login, }),
	route: routes.profile,
});

redirect({
	clock: logoutModel.logoutFx.done,
	route: routes.login,
});

redirect({
	clock: routes.notFound.open,
	params: combine({ address: authModel.$address as Store<string>, }),
	route: routes.profile,
});
