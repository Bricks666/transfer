import * as React from 'react';

const LoginPage = React.lazy(() => import('@/shared/pages/Login'));
const RegistrationPage = React.lazy(
	() => import('@/shared/pages/Registration')
);
const TransfersPage = React.lazy(() => import('@/shared/pages/Transfers'));
const ProfilePage = React.lazy(() => import('@/shared/pages/Profile'));
const CategoriesPage = React.lazy(() => import('@/shared/pages/Categories'));
const SamplesPage = React.lazy(() => import('@/shared/pages/Samples'));
const RequestsPage = React.lazy(() => import('@/shared/pages/Requests'));

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
