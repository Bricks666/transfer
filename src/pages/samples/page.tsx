import { Typography } from '@mui/material';
import * as React from 'react';
import { Header } from '@/widgets/header';
import { SampleList } from '@/widgets/samples';
import { CreateSampleForm } from '@/features/samples';
import { CommonProps } from '@/shared/types';
import { MainLayoutTemplate } from '@/shared/ui';

export interface SamplesPageProps extends CommonProps {}

const SamplesPage: React.FC<SamplesPageProps> = () => {
	return (
		<MainLayoutTemplate header={<Header />}>
			<Typography variant='h4' align='center' component='h1'>
				Samples
			</Typography>
			<CreateSampleForm />
			<SampleList />
		</MainLayoutTemplate>
	);
};

export default SamplesPage;
