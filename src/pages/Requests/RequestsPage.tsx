import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { CommonProps } from '@/types';
import { RequestsNavigation } from '@/components/RequestsNavigation';
import { UsersList } from '@/components/UsersList';
import { RequestList } from '@/components/RequestList';

export interface RequestsPageProps extends CommonProps {}

const RequestsPage: React.FC<RequestsPageProps> = React.memo(
	function RequestsPage() {
		return (
			<MainLayout>
				<h2>Offers Page</h2>
				<RequestsNavigation />
				<Routes>
					<Route path='users' element={<UsersList />} />
					<Route path='votes' element={<RequestList />} />
					<Route path='*' element={<Navigate to='users' replace />} />
				</Routes>
			</MainLayout>
		);
	}
);

export default RequestsPage;
