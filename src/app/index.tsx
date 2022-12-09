import * as React from 'react';
import '@/processes/auth';
import { Pages } from '@/pages';
import { withProviders } from './providers';
import './styles/index.css';

export const App = withProviders(() => {
	return <Pages />;
});
