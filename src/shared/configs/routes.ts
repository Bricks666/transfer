import { createRouterControls, createRoute } from 'atomic-router';
import { Address } from '@/shared/types';

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
