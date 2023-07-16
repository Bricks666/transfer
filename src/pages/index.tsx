import { createRoutesView } from 'atomic-router-react';
import * as React from 'react';
import { PageLoader } from '@/shared/ui';
import { CategoriesPage } from './categories';
import { LoginPage } from './login';
import { ProfilePage } from './profile';
import { RegistrationPage } from './registration';
import { RequestsPage } from './requests';
import { SamplesPage } from './samples';
import { TransfersPage } from './transfers';
import { UsersPage } from './users';

const Routes = createRoutesView({
	routes: [
		LoginPage,
		RegistrationPage,
		TransfersPage,
		ProfilePage,
		CategoriesPage,
		SamplesPage,
		RequestsPage,
		UsersPage
	],
});

export const Pages: React.FC = () => {
	return (
		<React.Suspense fallback={<PageLoader />}>
			<Routes />
		</React.Suspense>
	);
};
