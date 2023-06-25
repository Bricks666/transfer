import { RouteInstance } from 'atomic-router';
import { createRouteView } from 'atomic-router-react';
import * as React from 'react';
import { authorizedRoute, contractInitiatedRoute, currentRoute } from './model';

const View = React.lazy(() => import('./page')) as React.ComponentType<any>;

export const ProfilePage = {
	route: currentRoute,
	view: createRouteView({
		route: contractInitiatedRoute as RouteInstance<any>,
		view: createRouteView({
			route: authorizedRoute as RouteInstance<any>,
			view: View,
		}) as React.ComponentType<any>,
	}),
};
