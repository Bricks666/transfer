import { CircularProgress, Typography } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { Header } from '@/widgets/page';
import { requestsModel } from '@/entities/requests';
import { SITE_NAME } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import type { CommonProps } from '@/shared/types';
import { Center, MainLayout, PageTitle } from '@/shared/ui';
import styles from './page.module.css';
import { RequestList } from './ui';


export interface RequestsPageProps extends CommonProps {}

const RequestsPage: React.FC<RequestsPageProps> = () => {
	useTitle(`${SITE_NAME} - Голосования`);

	return (
		<MainLayout header={<Header />}>
			<PageTitle title='Голосования' />
			<Result />
		</MainLayout>
	);
};

const Result: React.FC = () => {
	const loading = useUnit(requestsModel.query.$pending);
	const empty = useUnit(requestsModel.$empty);

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
					Еще нет было ни одного голосования
				</Typography>
			</Center>
		);
	}

	return <RequestList />;
};

export default RequestsPage;
