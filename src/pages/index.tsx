import * as React from 'react';
import { createRoutesView } from 'atomic-router-react';
import { routingModel } from '@/shared/models';

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
			route: routingModel.loginRoute,
			view: LoginPage,
		},
		{
			route: routingModel.registrationRoute,
			view: RegistrationPage,
		},
		{
			route: routingModel.transfersRoute,
			view: TransfersPage,
		},
		{
			route: routingModel.profileRoute,
			view: ProfilePage,
		},
		{
			route: routingModel.categoriesRoute,
			view: CategoriesPage,
		},
		{
			route: routingModel.samplesRoute,
			view: SamplesPage,
		},
		{
			route: routingModel.requestsRoute,
			view: RequestsPage,
		},
		{
			route: routingModel.usersRoute,
			view: UsersPage,
		},
	],
});

export const Pages: React.FC = () => {
	return <Routes />;
};
