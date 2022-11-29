import { sample } from 'effector';
import { interval, spread } from 'patronum';
import { authApi, coreApi } from '@/api';
import {
	$address,
	$balance,
	$isAuth,
	$role,
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
	target: spread({
		targets: {
			address: $address,
			role: $role,
		},
	}),
});

sample({
	clock: logoutFx.done,
	fn: () => ({ address: null, role: null }),
	target: spread({
		targets: {
			address: $address,
			role: $role,
		},
	}),
});

sample({
	clock: fetchBalance.tick,
	source: $address,
	filter: Boolean,
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
