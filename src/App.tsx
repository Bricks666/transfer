import * as React from 'react';
import { createBrowserHistory } from 'history';
import { Pages } from '@/pages';
import '@/models/init';
import { routingModel } from './models';

routingModel.router.setHistory(createBrowserHistory());

export const App: React.FC = () => {
	return (
		<React.Suspense fallback='Loading...'>
			<Pages />
		</React.Suspense>
	);
};
