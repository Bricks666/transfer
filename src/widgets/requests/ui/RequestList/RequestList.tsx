import * as React from 'react';
import { useRequests } from '@/entities/requests';
import { FriendlyList } from '@/shared/ui/FriendlyList';
import { RequestCard } from '../RequestCard';

export const RequestList: React.FC = () => {
	const { data: requests, pending, } = useRequests();

	return (
		<FriendlyList
			items={requests}
			Component={RequestCard}
			indexedBy='id'
			isLoading={pending}
			emptyLabel="There haven't been votes by now"
		/>
	);
};
