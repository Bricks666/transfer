import {
	createHistoryRouter,
	createRouterControls,
	createRoute,
} from 'atomic-router';
import { Address } from '@/types';

export const loginRoute = createRoute();
export const registrationRoute = createRoute();
export const transfersRoute = createRoute();
export const usersRoute = createRoute();
export const profileRoute = createRoute<{ address: Address }>();
export const categoriesRoute = createRoute();
export const samplesRoute = createRoute();
export const requestsRoute = createRoute();

export const routes = {
	login: loginRoute,
	registration: registrationRoute,
	transfers: transfersRoute,
	categories: categoriesRoute,
	profile: profileRoute,
	samples: samplesRoute,
	users: usersRoute,
	requests: requestsRoute,
};

export const controls = createRouterControls();
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
		},
	],
	controls,
});
