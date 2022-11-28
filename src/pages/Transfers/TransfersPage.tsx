import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { CommonProps } from '@/types';
import { TransfersNavigation } from '@/components/TransfersNavigation';
import { SendedTransferList } from '@/components/SendedTransferList';
import { CreateTransferForm } from '@/components/CreateTransferForm';
import { ReceivedTransferList } from '@/components/ReceivedTransferList';
import { Balance } from '@/components/Balance';

export interface TransfersPageProps extends CommonProps {}

const TransfersPage: React.FC<TransfersPageProps> = React.memo(
	function TransfersPage() {
		return (
			<MainLayout>
				<h2>Transactions</h2>
				<TransfersNavigation />
				<Balance />
				<Routes>
					<Route
						path='sended'
						element={
							<>
								<CreateTransferForm />
								<SendedTransferList />
							</>
						}
					/>
					<Route path='received' element={<ReceivedTransferList />} />
					<Route path='*' element={<Navigate to='sended' replace />} />
				</Routes>
			</MainLayout>
		);
	}
);

export default TransfersPage;
