import { CircularProgress } from '@mui/material';
import { RouterProvider } from 'atomic-router-react';
import { sample } from 'effector';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { router } from '@/shared/configs';
import { appModel } from '@/shared/models';

sample({
	clock: appModel.started,
	fn: () => createBrowserHistory(),
	target: router.setHistory,
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
