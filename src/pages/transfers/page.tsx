import * as React from 'react';
import { MainLayout } from '@/shared/layouts';
import { CommonProps } from '@/shared/types';
import { TransferList } from '@/shared/components/TransferList';
import { CreateTransferForm } from '@/shared/components/CreateTransferForm';
import { Balance } from '@/entities/web3/ui/Balance';

export interface TransfersPageProps extends CommonProps {}

const TransfersPage: React.FC<TransfersPageProps> = () => {
	return (
		<MainLayout>
			<h2>Transactions</h2>
			<Balance />
			<CreateTransferForm />
			<TransferList />
		</MainLayout>
	);
};

export default TransfersPage;
