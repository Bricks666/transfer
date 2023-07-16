import { redirect } from 'atomic-router';
import { registrationModel } from '@/features/auth';
import { routes } from '@/shared/configs';

redirect({
	clock: registrationModel.mutation.finished.success,
	route: routes.login,
});
