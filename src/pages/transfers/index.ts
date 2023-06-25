import { createRouteView } from 'atomic-router-react';
import * as React from 'react';
import { authorizedRoute, contractInitiatedRoute, currentRoute } from './model';

const View = React.lazy(() => import('./page')) as React.ComponentType<any>;

export const TransfersPage = {
	route: currentRoute,
	view: createRouteView({
		route: contractInitiatedRoute,
		view: createRouteView({
			route: authorizedRoute,
			view: View,
		}) as React.ComponentType<any>,
	}),
};
