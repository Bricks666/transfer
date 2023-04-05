import * as React from 'react';
import { Header } from '@/widgets/page';
import { MainLayout } from '@/shared/ui';
import { pageModel } from './models';
import { UsersList } from './ui';

const UsersPage: React.FC = () => {
	return (
		<MainLayout header={<Header />}>
			<UsersList />
		</MainLayout>
	);
};

pageModel.loaded();

export default UsersPage;
