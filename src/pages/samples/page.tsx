import * as React from 'react';
import { CreateSampleForm } from '@/features/samples';
import { MainLayout } from '@/shared/layouts';
import { CommonProps } from '@/shared/types';
import { SampleList } from '@/shared/components/SampleList';

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
