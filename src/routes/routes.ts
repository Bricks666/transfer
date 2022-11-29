import * as React from 'react';

const LoginPage = React.lazy(() => import('@/pages/Login'));
const RegistrationPage = React.lazy(() => import('@/pages/Registration'));
const TransfersPage = React.lazy(() => import('@/pages/Transfers'));
const ProfilePage = React.lazy(() => import('@/pages/Profile'));
const CategoriesPage = React.lazy(() => import('@/pages/Categories'));
const SamplesPage = React.lazy(() => import('@/pages/Samples'));
const RequestsPage = React.lazy(() => import('@/pages/Requests'));

interface Route {
	readonly Component: React.ComponentType;
	readonly path: string;
	readonly isAuthRoute?: boolean;
	readonly isAdminOnly?: boolean;
}

export const routes: Route[] = [
	{
		Component: LoginPage,
		path: '/login',
	},
	{
		Component: RegistrationPage,
		path: '/registration',
	},
	{
		Component: TransfersPage,
		path: '/*',
		isAuthRoute: true,
	},
	{
		Component: ProfilePage,
		path: '/profile',
		isAuthRoute: true,
	},
	{
		Component: CategoriesPage,
		path: '/categories',
		isAuthRoute: true,
		isAdminOnly: true,
	},
	{
		Component: SamplesPage,
		path: '/samples',
		isAuthRoute: true,
		isAdminOnly: true,
	},
	{
		Component: RequestsPage,
		path: '/requests/*',
		isAuthRoute: true,
		isAdminOnly: true,
	},
];
