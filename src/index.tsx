import * as React from 'react';
import { RouterProvider } from 'atomic-router-react';
import { createRoot } from 'react-dom/client';
import { App } from '@/App';
import { routingModel } from '@/models';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<RouterProvider router={routingModel.router}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);
