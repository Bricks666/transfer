import { createRouteView } from 'atomic-router-react';
import * as React from 'react';
import { PageLoader } from '@/shared/ui';
import { anonymousRoute, contractInitiatedRoute, currentRoute } from './model';

const View = React.lazy(() => import('./page')) as React.ComponentType<any>;

export const LoginPage = {
	route: currentRoute,
	view: createRouteView({
		route: contractInitiatedRoute,
		view: createRouteView({
			route: anonymousRoute,
			view: View,
			otherwise: PageLoader as React.ComponentType<any>,
		}) as React.ComponentType<any>,
		otherwise: PageLoader as React.ComponentType<any>,
	}),
};
