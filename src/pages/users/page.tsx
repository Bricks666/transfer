import * as React from 'react';
import { Header } from '@/widgets/page';
import { SITE_NAME } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import { MainLayout, PageTitle } from '@/shared/ui';
import { UsersList } from './ui';

const UsersPage: React.FC = () => {
	useTitle(`${SITE_NAME} - Пользователи`);

	return (
		<MainLayout header={<Header />}>
			<PageTitle title='Пользователи' />
			<UsersList />
		</MainLayout>
	);
};

export default UsersPage;
