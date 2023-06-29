import * as React from 'react';
import { Header } from '@/widgets/page';
import { SITE_NAME } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { MainLayout, PageTitle } from '@/shared/ui';
import { RequestList } from './ui';

export interface RequestsPageProps extends CommonProps {}

const RequestsPage: React.FC<RequestsPageProps> = () => {
	useTitle(`${SITE_NAME} - Запросы пользователей`);

	return (
		<MainLayout header={<Header />}>
			<PageTitle title='Запросы' />
			<RequestList />
		</MainLayout>
	);
};

export default RequestsPage;
