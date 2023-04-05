import { Typography } from '@mui/material';
import * as React from 'react';
import { Header , Popups } from '@/widgets/page';
import { AcceptTransfer, CreateTransferForm } from '@/features/transfers';
import { popups } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';
import { pageModel } from './models';
import { TransferList } from './ui';

export interface TransfersPageProps extends CommonProps {}

const popupMap = {
	[popups.acceptTransfer]: AcceptTransfer,
};

const TransfersPage: React.FC<TransfersPageProps> = () => {
	return (
		<MainLayout header={<Header />}>
			<Typography variant='h3' align='center' component='h1'>
				Переводы
			</Typography>
			<CreateTransferForm />
			<TransferList />
			<Popups popupMap={popupMap} />
		</MainLayout>
	);
};

pageModel.loaded();

export default TransfersPage;
