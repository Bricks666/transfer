import { sample } from 'effector';
import { interval } from 'patronum';
import { authApi, coreApi } from '@/api';
import {
	$authUser,
	$balance,
	$isAuth,
	fetchBalanceFx,
	loginFx,
	loginMutation,
	logoutFx,
	registrationFx,
} from './units';

fetchBalanceFx.use(coreApi.getBalance);
loginFx.use(authApi.login);
registrationFx.use(authApi.registration);

export const fetchBalance = interval({
	timeout: 500,
	start: sample({
		clock: $isAuth,
		filter: Boolean,
	}),
	stop: sample({
		clock: $isAuth,
		filter: (isAuth) => !isAuth,
	}),
});

sample({
	clock: loginMutation.finished.success,
	fn: ({ data }) => data,
	target: $authUser,
});

sample({
	clock: logoutFx.done,
	fn: () => null,
	target: $authUser,
});

sample({
	clock: fetchBalance.tick,
	source: $authUser,
	filter: Boolean,
	fn: (user) => user.login,
	target: fetchBalanceFx,
});

sample({
	clock: fetchBalanceFx.doneData,
	fn: Number,
	target: $balance,
});

sample({
	clock: logoutFx.done,
	target: $balance.reinit!,
});
