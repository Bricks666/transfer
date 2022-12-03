import * as React from 'react';
import { createHistoryRouter } from 'atomic-router';
import { RouterProvider } from 'atomic-router-react';
import { createBrowserHistory } from 'history';
import { routingModel } from '@/shared/models';

const router = createHistoryRouter({
	routes: [
		{
			path: '/login',
			route: routingModel.loginRoute,
		},
		{
			path: '/registration',
			route: routingModel.registrationRoute,
		},
		{
			path: '/transfers',
			route: routingModel.transfersRoute,
		},
		{
			path: '/profile/:address',
			route: routingModel.profileRoute,
		},
		{
			path: '/categories',
			route: routingModel.categoriesRoute,
		},
		{
			path: '/samples',
			route: routingModel.samplesRoute,
		},
		{
			path: '/users',
			route: routingModel.usersRoute,
		},
		{
			path: '/requests',
			route: routingModel.requestsRoute,
		},
	],
	controls: routingModel.controls,
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
