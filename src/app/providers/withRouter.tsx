import { CircularProgress } from '@mui/material';
import { createHistoryRouter, redirect } from 'atomic-router';
import { RouterProvider } from 'atomic-router-react';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { controls, routes } from '@/shared/configs';

const router = createHistoryRouter({
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
	notFoundRoute: routes.notFound,
	controls,
});

redirect({
	clock: router.initialized,
	route: routes.login,
});

router.setHistory(createBrowserHistory());

router.routeNotFound.watch(() => console.log('Now found'));

export const withRouter =
	(Component: React.ComponentType): React.ComponentType =>
		(props) => {
			return (
				<RouterProvider router={router}>
					<React.Suspense fallback={<CircularProgress />}>
						<Component {...props} />
					</React.Suspense>
				</RouterProvider>
			);
		};
