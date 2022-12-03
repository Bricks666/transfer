import * as React from 'react';
import { MainLayout } from '@/layouts';
import { CommonProps } from '@/types';
import { TransferList } from '@/components/TransferList';
import { CreateTransferForm } from '@/components/CreateTransferForm';
import { Balance } from '@/components/Balance';

export interface TransfersPageProps extends CommonProps {}

const TransfersPage: React.FC<TransfersPageProps> = React.memo(
	function TransfersPage() {
		return (
			<MainLayout>
				<h2>Transactions</h2>
				<Balance />
				<CreateTransferForm />
				<TransferList />
			</MainLayout>
		);
	}
);

export default TransfersPage;
