import * as React from 'react';
import { Pages } from '@/pages';
import { withProviders } from './providers';
import '@/shared/models/init';

export const App = withProviders(() => {
	return (
		<React.Suspense fallback='Loading...'>
			<Pages />
		</React.Suspense>
	);
});