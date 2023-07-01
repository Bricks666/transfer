import { createDomain, sample } from 'effector';
import { authModel } from '@/shared/models';

const logoutDomain = createDomain();

export const logoutFx = logoutDomain.effect<void, null>(() => null);

sample({
	clock: logoutFx.doneData,
	target: authModel.$user,
});
