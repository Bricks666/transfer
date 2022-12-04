import * as React from 'react';
import { createHistoryRouter } from 'atomic-router';
import { RouterProvider } from 'atomic-router-react';
import { createBrowserHistory } from 'history';
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
	controls,
});

router.setHistory(createBrowserHistory());

export const withRouter =
	(Component: React.ComponentType): React.ComponentType =>
		(props) => {
			return (
				<RouterProvider router={router}>
					<Component {...props} />
				</RouterProvider>
			);
		};
