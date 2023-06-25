import { createDomain, sample } from 'effector';
import { authModel } from '@/shared/models';

const logoutDomain = createDomain();

export const logoutFx = logoutDomain.effect<void, void>(console.log);

sample({
	clock: logoutFx.done,
	fn: () => null,
	target: authModel.$user,
});
