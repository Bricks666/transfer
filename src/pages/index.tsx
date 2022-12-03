import * as React from 'react';
import { createRoutesView } from 'atomic-router-react';
import { routingModel } from '@/models';

const LoginPage = React.lazy(() => import('@/pages/Login'));
const RegistrationPage = React.lazy(() => import('@/pages/Registration'));
const TransfersPage = React.lazy(() => import('@/pages/Transfers'));
const ProfilePage = React.lazy(() => import('@/pages/Profile'));
const CategoriesPage = React.lazy(() => import('@/pages/Categories'));
const SamplesPage = React.lazy(() => import('@/pages/Samples'));
const RequestsPage = React.lazy(() => import('@/pages/Requests'));
const UsersPage = React.lazy(() => import('@/pages/Users'));

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
