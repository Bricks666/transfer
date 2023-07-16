import { createRouteView } from 'atomic-router-react';
import * as React from 'react';
import { ContractError } from '@/shared/ui';
import { anonymousRoute, contractInitiatedRoute, currentRoute } from './model';

const View = React.lazy(() => import('./page')) as React.ComponentType<any>;

export const RegistrationPage = {
	route: currentRoute,
	view: createRouteView({
		route: contractInitiatedRoute,
		view: createRouteView({
			route: anonymousRoute,
			view: View,
		}) as React.ComponentType<any>,
		otherwise: ContractError as React.ComponentType<any>,
	}),
};
