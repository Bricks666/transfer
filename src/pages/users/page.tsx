import * as React from 'react';
import { Header } from '@/widgets/header';
import { MainLayoutTemplate } from '@/shared/ui';
import { pageModel } from './models';
import { UsersList } from './ui';

const UsersPage: React.FC = () => {
	return (
		<MainLayoutTemplate header={<Header />}>
			<UsersList />
		</MainLayoutTemplate>
	);
};

pageModel.loaded();

export default UsersPage;
