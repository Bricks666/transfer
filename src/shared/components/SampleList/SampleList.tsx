import * as React from 'react';
import { useSamples } from '@/shared/hooks';
import { FriendlyList } from '../FriendlyList';
import { SampleCard } from './SampleCard';

export const SampleList: React.FC = () => {
	const { data: samples, pending } = useSamples();

	return (
		<FriendlyList
			items={samples}
			Component={SampleCard}
			indexedBy='name'
			isLoading={pending}
			emptyLabel="There aren't any samples"
		/>
	);
};
