import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { CommonProps } from '@/types';
import { TransactionNavigation } from '@/components/TransactionNavigation';
import { SendedTransactions } from '@/components/SendedTransactions';
import { CreateTransactionForm } from '@/components/CreateTransactionForm';
import { ReceivedTransactions } from '@/components/ReceivedTransactions';
import { Balance } from '@/components/Balance';

export interface TransfersPageProps extends CommonProps {}

const TransfersPage: React.FC<TransfersPageProps> = React.memo(
	function TransfersPage() {
		return (
			<MainLayout>
				<h2>Transactions</h2>
				<TransactionNavigation />
				<Balance />
				<Routes>
					<Route
						path='sended'
						element={
							<>
								<CreateTransactionForm />
								<SendedTransactions />
							</>
						}
					/>
					<Route path='received' element={<ReceivedTransactions />} />
					<Route path='*' element={<Navigate to='sended' replace />} />
				</Routes>
			</MainLayout>
		);
	}
);

export default TransfersPage;
