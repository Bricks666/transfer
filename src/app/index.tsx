import * as React from 'react';
import '@/processes/auth';
import { Pages } from '@/pages';
import { withProviders } from './providers';

export const App = withProviders(() => {
	return (
		<React.Suspense fallback='Loading...'>
			<Pages />
		</React.Suspense>
	);
});
