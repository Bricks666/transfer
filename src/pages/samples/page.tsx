import * as React from 'react';
import { MainLayout } from '@/shared/layouts';
import { CommonProps } from '@/shared/types';
import { SampleList } from '@/shared/components/SampleList';
import { CreateSampleForm } from '@/shared/components/CreateSampleForm';

export interface SamplesPageProps extends CommonProps {}

const SamplesPage: React.FC<SamplesPageProps> = () => {
	return (
		<MainLayout>
			<h2>Samples Page</h2>
			<CreateSampleForm />
			<SampleList />
		</MainLayout>
	);
};

export default SamplesPage;
