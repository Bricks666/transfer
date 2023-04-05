import { Typography } from '@mui/material';
import * as React from 'react';
import { Header } from '@/widgets/page';
import { CreateSampleForm } from '@/features/samples';
import { CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';
import { pageModel } from './models';
import { SampleList } from './ui';

export interface SamplesPageProps extends CommonProps {}

const SamplesPage: React.FC<SamplesPageProps> = () => {
	return (
		<MainLayout header={<Header />}>
			<Typography variant='h4' align='center' component='h1'>
				Samples
			</Typography>
			<CreateSampleForm />
			<SampleList />
		</MainLayout>
	);
};

pageModel.loaded();

export default SamplesPage;
