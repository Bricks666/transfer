import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { CommonProps } from '@/types';
import { OffersNavigation } from '@/components/OffersNavigation';
import { UsersList } from '@/components/UsersList';
import { VotesList } from '@/components/VotesList';

export interface OffersPageProps extends CommonProps {}

const OffersPage: React.FC<OffersPageProps> = React.memo(function OffersPage() {
	return (
		<MainLayout>
			<h2>Offers Page</h2>
			<OffersNavigation />
			<Routes>
				<Route path='users' element={<UsersList />} />
				<Route path='votes' element={<VotesList />} />
				<Route path='*' element={<Navigate to='users' replace />} />
			</Routes>
		</MainLayout>
	);
});

export default OffersPage;
