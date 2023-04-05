import { Typography } from '@mui/material';
import * as React from 'react';
import { Header } from '@/widgets/page';
import { SITE_NAME } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';
import { pageModel } from './models';
import { RequestList } from './ui';

export interface RequestsPageProps extends CommonProps {}

const RequestsPage: React.FC<RequestsPageProps> = () => {
	useTitle(`${SITE_NAME} - Запросы пользователей`);

	return (
		<MainLayout header={<Header />}>
			<Typography variant='h4' align='center' component='h1'>
				Requests
			</Typography>
			<RequestList />
		</MainLayout>
	);
};

pageModel.loaded();

export default RequestsPage;
