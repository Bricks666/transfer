import { Typography } from '@mui/material';
import * as React from 'react';
import { Header } from '@/widgets/header';
import { TransferList } from '@/widgets/transfers';
import { CreateTransferForm } from '@/features/transfers';
import { CommonProps } from '@/shared/types';
import { MainLayoutTemplate } from '@/shared/ui';

export interface TransfersPageProps extends CommonProps {}

const TransfersPage: React.FC<TransfersPageProps> = () => {
	return (
		<MainLayoutTemplate header={<Header />}>
			<Typography variant='h4' align='center' component='h1'>
				Transactions
			</Typography>
			<CreateTransferForm />
			<TransferList />
		</MainLayoutTemplate>
	);
};

export default TransfersPage;
