import * as React from 'react';
import { MainLayout } from '@/layouts';
import { CommonProps } from '@/types';
import { SampleList } from '@/components/SampleList';
import { CreateSampleForm } from '@/components/CreateSampleForm';

export interface SamplesPageProps extends CommonProps {}

const SamplesPage: React.FC<SamplesPageProps> = React.memo(
	function SamplesPage() {
		return (
			<MainLayout>
				<h2>Samples Page</h2>
				<CreateSampleForm />
				<SampleList />
			</MainLayout>
		);
	}
);

export default SamplesPage;
