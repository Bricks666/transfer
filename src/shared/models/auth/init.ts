import { sample } from 'effector';
import { interval, spread } from 'patronum';
import { authApi, coreApi } from '@/shared/api';
import {
	$address,
	$balance,
	$isAuth,
	$role,
	fetchBalanceFx,
	loginFx,
	loginMutation,
	logoutFx,
	registrationFx
} from './units';

fetchBalanceFx.use(coreApi.getBalance);
loginFx.use(authApi.login);
registrationFx.use(authApi.registration);

export const fetchBalance = interval({
	timeout: 3000,
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
	fn: ({ data, }) => ({ login: data.login, role: Number(data.role), }),
	target: spread({
		targets: {
			login: $address,
			role: $role,
		},
	}),
});

sample({
	clock: logoutFx.done,
	fn: () => ({ login: null, role: null, }),
	target: spread({
		targets: {
			login: $address,
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
	target: $balance,
});

sample({
	clock: logoutFx.done,
	target: $balance.reinit!,
});
