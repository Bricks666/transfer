import { createRouterControls, createRoute } from 'atomic-router';
import { Address } from '@/shared/types';

export const loginRoute = createRoute();
export const registrationRoute = createRoute();
export const transfersRoute = createRoute();
export const usersRoute = createRoute();
export const profileRoute = createRoute<{ address: Address }>();
export const categoriesRoute = createRoute();
export const samplesRoute = createRoute();
export const requestsRoute = createRoute();
export const notFoundRoute = createRoute();
export const controls = createRouterControls();

export const routes = {
	login: loginRoute,
	registration: registrationRoute,
	transfers: transfersRoute,
	categories: categoriesRoute,
	profile: profileRoute,
	samples: samplesRoute,
	users: usersRoute,
	requests: requestsRoute,
	notFound: notFoundRoute,
};
