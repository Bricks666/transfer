import * as React from 'react';
import { Header } from '@/widgets/header';
import { UsersList } from '@/widgets/users';
import { MainLayoutTemplate } from '@/shared/ui';

const UsersPage: React.FC = () => {
	return (
		<MainLayoutTemplate header={<Header />}>
			<UsersList />
		</MainLayoutTemplate>
	);
};

export default UsersPage;
