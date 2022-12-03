import * as React from 'react';
import { MainLayout } from '@/shared/layouts';
import { CommonProps } from '@/shared/types';
import { RequestList } from '@/shared/components/RequestList';

export interface RequestsPageProps extends CommonProps {}

const RequestsPage: React.FC<RequestsPageProps> = () => {
	return (
		<MainLayout>
			<h2>Offers Page</h2>
			<RequestList />
		</MainLayout>
	);
};

export default RequestsPage;
