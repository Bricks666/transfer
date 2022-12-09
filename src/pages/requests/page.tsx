import { Typography } from '@mui/material';
import * as React from 'react';
import { Header } from '@/widgets/header';
import { RequestList } from '@/widgets/requests';
import { CommonProps } from '@/shared/types';
import { MainLayoutTemplate } from '@/shared/ui';

export interface RequestsPageProps extends CommonProps {}

const RequestsPage: React.FC<RequestsPageProps> = () => {
	return (
		<MainLayoutTemplate header={<Header />}>
			<Typography variant='h4' align='center' component='h1'>
				Requests
			</Typography>
			<RequestList />
		</MainLayoutTemplate>
	);
};

export default RequestsPage;
