import * as React from 'react';
import { useRequests } from '@/hooks';
import { FriendlyList } from '../FriendlyList';
import { RequestCard } from './RequestCard';

export const RequestList: React.FC = () => {
	const { data: requests, pending } = useRequests();

	return (
		<FriendlyList
			items={requests}
			Card={RequestCard}
			indexedBy='id'
			isLoading={pending}
			emptyLabel="There haven't been votes by now"
		/>
	);
};
