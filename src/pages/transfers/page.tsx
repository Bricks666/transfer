import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { Collapse, IconButton, Tooltip, Typography } from '@mui/material';
import * as React from 'react';
import { Header, Popups } from '@/widgets/page';
import { AcceptTransfer, CreateTransferForm } from '@/features/transfers';
import { SITE_NAME, popups } from '@/shared/configs';
import { useTitle, useToggle } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';
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
			<div className={styles.header}>
				<Typography className={styles.title} variant='h4' component='h1'>
					Переводы
				</Typography>
				<Form />
			</div>
			<TransferList />
			<Popups popupMap={popupMap} />
		</MainLayout>
	);
};

const Form: React.FC = () => {
	const [opened, handlers] = useToggle(false);
	return (
		<>
			<Tooltip title='Создать перевод'>
				<IconButton onClick={handlers.toggle}>
					{opened ? <CloseIcon /> : <AddIcon />}
				</IconButton>
			</Tooltip>

			<Collapse className={styles.form} in={opened}>
				<CreateTransferForm />
			</Collapse>
		</>
	);
};

export default TransfersPage;
