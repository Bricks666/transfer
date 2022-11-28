import * as React from 'react';
import { useSamples } from '@/hooks';
import { FriendlyList } from '../FriendlyList';
import { SampleCard } from './SampleCard';

export const SampleList: React.FC = () => {
	const { data: samples, pending } = useSamples();

	return (
		<FriendlyList
			items={samples}
			Card={SampleCard}
			indexedBy='name'
			isLoading={pending}
			emptyLabel="There aren't any samples"
		/>
	);
};
