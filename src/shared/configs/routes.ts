import {
	createRouterControls,
	createRoute,
	createHistoryRouter
} from 'atomic-router';
import { Address } from 'web3';

export const controls = createRouterControls();

export const routes = {
	login: createRoute(),
	registration: createRoute(),
	transfers: createRoute(),
	categories: createRoute(),
	profile: createRoute<{ address: Address }>(),
	samples: createRoute(),
	users: createRoute(),
	requests: createRoute(),
};

export const router = createHistoryRouter({
	routes: [
		{
			path: '/login',
			route: routes.login,
		},
		{
			path: '/registration',
			route: routes.registration,
		},
		{
			path: '/transfers',
			route: routes.transfers,
		},
		{
			path: '/profile/:address',
			route: routes.profile,
		},
		{
			path: '/categories',
			route: routes.categories,
		},
		{
			path: '/samples',
			route: routes.samples,
		},
		{
			path: '/users',
			route: routes.users,
		},
		{
			path: '/requests',
			route: routes.requests,
		}
	],
	controls,
});
