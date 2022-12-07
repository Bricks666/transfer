import * as React from 'react';
import { Header } from '@/widgets/header';
import { RequestList } from '@/widgets/requests';
import { CommonProps } from '@/shared/types';
import { MainLayoutTemplate } from '@/shared/ui';

export interface RequestsPageProps extends CommonProps {}

const RequestsPage: React.FC<RequestsPageProps> = () => {
	return (
		<MainLayoutTemplate header={<Header />}>
			<h2>Offers Page</h2>
			<RequestList />
		</MainLayoutTemplate>
	);
};

export default RequestsPage;
