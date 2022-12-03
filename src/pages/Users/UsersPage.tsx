import * as React from 'react';
import { UsersList } from '@/components/UsersList';
import { MainLayout } from '@/layouts';

const UsersPage: React.FC = () => {
	return (
		<MainLayout>
			<UsersList />
		</MainLayout>
	);
};

export default UsersPage;
