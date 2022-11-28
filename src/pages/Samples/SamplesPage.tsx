import * as React from 'react';
import { MainLayout } from '@/layouts';
import { CommonProps } from '@/types';
import { SamplesList } from '@/components/SamplesList';
import { CreateSampleForm } from '@/components/CreateSampleForm';

export interface SamplesPageProps extends CommonProps {}

const SamplesPage: React.FC<SamplesPageProps> = React.memo(
	function SamplesPage() {
		return (
			<MainLayout>
				<h2>Samples Page</h2>
				<CreateSampleForm />
				<SamplesList />
			</MainLayout>
		);
	}
);

export default SamplesPage;
