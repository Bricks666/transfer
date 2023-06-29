import * as React from 'react';
import { Header } from '@/widgets/page';
import { CreateSampleForm } from '@/features/samples';
import { SITE_NAME } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { MainLayout, PageTitle } from '@/shared/ui';
import { SampleList } from './ui';

export interface SamplesPageProps extends CommonProps {}

const SamplesPage: React.FC<SamplesPageProps> = () => {
	useTitle(`${SITE_NAME} - Шаблоны`);

	return (
		<MainLayout header={<Header />}>
			<PageTitle title='Шаблоны' />
			<CreateSampleForm />
			<SampleList />
		</MainLayout>
	);
};

export default SamplesPage;
