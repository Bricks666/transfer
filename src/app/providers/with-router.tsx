import { CircularProgress } from '@mui/material';
import { redirect } from 'atomic-router';
import { RouterProvider } from 'atomic-router-react';
import { sample } from 'effector';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { router, routes } from '@/shared/configs';
import { appModel } from '@/shared/models';

sample({
	clock: appModel.started,
	fn: () => createBrowserHistory(),
	target: router.setHistory,
});

redirect({
	clock: router.routeNotFound,
	route: routes.login,
});

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
