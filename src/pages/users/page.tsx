import * as React from 'react';
import { Header } from '@/widgets/page';
import { SITE_NAME } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import { MainLayout } from '@/shared/ui';
import { pageModel } from './models';
import { UsersList } from './ui';

const UsersPage: React.FC = () => {
	useTitle(`${SITE_NAME} - Пользователи`);

	return (
		<MainLayout header={<Header />}>
			<UsersList />
		</MainLayout>
	);
};

pageModel.loaded();

export default UsersPage;
