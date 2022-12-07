import * as React from 'react';
import { TransferList } from '@/widgets/transfers';
import { CreateTransferForm } from '@/features/transfers';
import { Balance } from '@/entities/web3';
import { MainLayout } from '@/shared/layouts';
import { CommonProps } from '@/shared/types';

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
