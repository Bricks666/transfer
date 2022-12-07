import * as React from 'react';
import { UsersList } from '@/widgets/users';
import { MainLayout } from '@/shared/layouts';

const UsersPage: React.FC = () => {
	return (
		<MainLayout>
			<UsersList />
		</MainLayout>
	);
};

export default UsersPage;
