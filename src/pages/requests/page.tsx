import { Typography } from '@mui/material';
import * as React from 'react';
import { Header } from '@/widgets/page';
import { CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';
import { pageModel } from './models';
import { RequestList } from './ui';

export interface RequestsPageProps extends CommonProps {}

const RequestsPage: React.FC<RequestsPageProps> = () => {
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
