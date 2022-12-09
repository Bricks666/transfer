import { createDomain, sample } from 'effector';
import { spread } from 'patronum';
import { authModel } from '@/entities/auth';
import { Roles } from '@/shared/types';

const logoutDomain = createDomain();

export const logoutFx = logoutDomain.effect<void, void>();
logoutFx.use(console.log);

sample({
	clock: logoutFx.done,
	fn: () => ({
		address: null,
		role: Roles.user,
	}),
	target: spread({
		address: authModel.setAddress,
		role: authModel.setRole,
	} as any),
});
