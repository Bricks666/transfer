import { createRoutesView } from 'atomic-router-react';
import * as React from 'react';
import { routes } from '@/shared/configs';

const LoginPage = React.lazy(() => import('./login'));
const RegistrationPage = React.lazy(() => import('./registration'));
const TransfersPage = React.lazy(() => import('./transfers'));
const ProfilePage = React.lazy(() => import('./profile'));
const CategoriesPage = React.lazy(() => import('./categories'));
const SamplesPage = React.lazy(() => import('./samples'));
const RequestsPage = React.lazy(() => import('./requests'));
const UsersPage = React.lazy(() => import('./users'));

const Routes = createRoutesView({
	routes: [
		{
			route: routes.login,
			view: LoginPage,
		},
		{
			route: routes.registration,
			view: RegistrationPage,
		},
		{
			route: routes.transfers,
			view: TransfersPage,
		},
		{
			route: routes.profile,
			view: ProfilePage,
		},
		{
			route: routes.categories,
			view: CategoriesPage,
		},
		{
			route: routes.samples,
			view: SamplesPage,
		},
		{
			route: routes.requests,
			view: RequestsPage,
		},
		{
			route: routes.users,
			view: UsersPage,
		}
	],
});

export const Pages: React.FC = () => {
	return <Routes />;
};
