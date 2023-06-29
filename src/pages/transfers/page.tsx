import AddIcon from '@mui/icons-material/Add';
import {
	CircularProgress,
	Collapse,
	IconButton,
	Tooltip,
	Typography
} from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { Header, Popups } from '@/widgets/page';
import { AcceptTransfer, CreateTransferForm } from '@/features/transfers';
import { transfersModel } from '@/entities/transfers';
import { SITE_NAME, popups } from '@/shared/configs';
import { useTitle, useToggle } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Center, MainLayout } from '@/shared/ui';
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
			<Result />
			<Popups popupMap={popupMap} />
		</MainLayout>
	);
};

const Form: React.FC = () => {
	const [opened, handlers] = useToggle(false);

	const iconClasses = cn(styles.icon, { [styles.icon__active]: opened, });

	const title = opened ? 'Закрыть форму' : 'Создать перевод';

	return (
		<>
			<Tooltip title={title}>
				<IconButton onClick={handlers.toggle}>
					<AddIcon className={iconClasses} />
				</IconButton>
			</Tooltip>

			<Collapse className={styles.form} in={opened} mountOnEnter unmountOnExit>
				<CreateTransferForm />
			</Collapse>
		</>
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
