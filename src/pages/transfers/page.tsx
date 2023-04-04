import { Typography } from '@mui/material';
import * as React from 'react';
import { Header } from '@/widgets/header';
import { CreateTransferForm } from '@/features/transfers';
import { CommonProps } from '@/shared/types';
import { MainLayoutTemplate } from '@/shared/ui';
import { pageModel } from './models';
import { TransferList } from './ui';

export interface TransfersPageProps extends CommonProps {}

const TransfersPage: React.FC<TransfersPageProps> = () => {
	return (
		<MainLayoutTemplate header={<Header />}>
			<Typography variant='h4' align='center' component='h1'>
				Transfers
			</Typography>
			<CreateTransferForm />
			<TransferList />
		</MainLayoutTemplate>
	);
};

pageModel.loaded();

export default TransfersPage;
