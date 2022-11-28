import * as React from 'react';
import { AppRoutes } from './components/AppRoutes';
import './models/init';

export const App: React.FC = () => {
	return (
		<React.Suspense fallback='Loading...'>
			<AppRoutes />
		</React.Suspense>
	);
};
