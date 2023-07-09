import { CircularProgress } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { Header } from '@/widgets/page';
import { usersModel } from '@/entities/users';
import { SITE_NAME } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import { Center, MainLayout, PageTitle } from '@/shared/ui';
import { UsersList } from './ui';

const UsersPage: React.FC = () => {
	useTitle(`${SITE_NAME} - Пользователи`);

	return (
		<MainLayout header={<Header />}>
			<PageTitle title='Пользователи' />
			<Result />
		</MainLayout>
	);
};

const Result: React.FC = () => {
	const loading = useUnit(usersModel.query.$pending);

	if (loading) {
		return (
			<Center>
				<CircularProgress size={60} />
			</Center>
		);
	}

	return <UsersList />;
};

export default UsersPage;
