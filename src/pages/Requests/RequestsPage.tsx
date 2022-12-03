import * as React from 'react';
import { MainLayout } from '@/layouts';
import { CommonProps } from '@/types';
import { RequestList } from '@/components/RequestList';

export interface RequestsPageProps extends CommonProps {}

const RequestsPage: React.FC<RequestsPageProps> = React.memo(
	function RequestsPage() {
		return (
			<MainLayout>
				<h2>Offers Page</h2>
				<RequestList />
			</MainLayout>
		);
	}
);

export default RequestsPage;
