import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { CircularProgress, Typography } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { Header, Popups } from '@/widgets/page';
import { AcceptTransfer, CreateTransferForm } from '@/features/transfers';
import { transfersModel } from '@/entities/transfers';
import { SITE_NAME, popups } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import type { CommonProps } from '@/shared/types';
import { Center, CollapsedForm, MainLayout, PageTitle } from '@/shared/ui';
import styles from './page.module.css';
import { TransferList } from './ui';

export interface TransfersPageProps extends CommonProps {}

const popupMap = {
	[popups.acceptTransfer]: AcceptTransfer,
};

const TransfersPage: React.FC<TransfersPageProps> = () => {
	useTitle(`${SITE_NAME} - Переводы`);

	return (
		<MainLayout header={<Header />}>
			<PageTitle
				title='Переводы'
				extra={
					<CollapsedForm
						title='Создать перевод'
						openedTitle='Закрыть форму'
						collapseClassName={styles.form}
						form={<CreateTransferForm />}
						closedIcon={<AddIcon />}
						openedIcon={<CloseIcon />}
					/>
				}
			/>
			<Result />
			<Popups popupMap={popupMap} />
		</MainLayout>
	);
};

const Result: React.FC = () => {
	const loading = useUnit(transfersModel.query.$pending);
	const empty = useUnit(transfersModel.$empty);

	if (loading) {
		return (
			<Center>
				<CircularProgress size={60} />
			</Center>
		);
	}
	if (empty) {
		return (
			<Center>
				<Typography className={styles.empty_label} component='p'>
					У вас еще нет ни одного перевода
				</Typography>
			</Center>
		);
	}

	return <TransferList />;
};

export default TransfersPage;
