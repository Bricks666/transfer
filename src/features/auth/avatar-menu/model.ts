import { createMutation } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { authApi } from '@/shared/api';
import { authModel } from '@/shared/models';

const logoutDomain = createDomain();

const handlerFx = logoutDomain.effect(authApi.logout);

export const mutation = createMutation({
	effect: authModel.attachWithSender(handlerFx),
});

sample({
	clock: mutation.finished.success,
	filter: ({ result, }) => !!result,
	fn: () => null,
	target: authModel.$user,
});
