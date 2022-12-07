import * as React from 'react';
import { RequestList } from '@/widgets/requests';
import { MainLayout } from '@/shared/layouts';
import { CommonProps } from '@/shared/types';

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
