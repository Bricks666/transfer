import * as React from 'react';
import { UsersList } from '@/shared/components/UsersList';
import { MainLayout } from '@/shared/layouts';

const UsersPage: React.FC = () => {
	return (
		<MainLayout>
			<UsersList />
		</MainLayout>
	);
};

export default UsersPage;
