import * as React from 'react';
import { SampleCard, useSamples } from '@/entities/samples';
import { FriendlyList } from '@/shared/ui/FriendlyList';

export const SampleList: React.FC = () => {
	const { data: samples, pending, } = useSamples();

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
