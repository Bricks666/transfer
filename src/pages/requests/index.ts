import { createRouteView } from 'atomic-router-react';
import * as React from 'react';
import { ContractError } from '@/shared/ui';
import { authorizedRoute, contractInitiatedRoute, currentRoute } from './model';

const View = React.lazy(() => import('./page')) as React.ComponentType<any>;

export const RequestsPage = {
	route: currentRoute,
	view: createRouteView({
		route: contractInitiatedRoute,
		view: createRouteView({
			route: authorizedRoute,
			view: View,
		}) as React.ComponentType<any>,
		otherwise: ContractError as React.ComponentType<any>,
	}),
};
