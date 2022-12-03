import * as React from 'react';
import { useTransfers } from '@/hooks';
import { FriendlyList } from '../FriendlyList';
import { TransferCard } from './TransferCard';

export const TransferList: React.FC = () => {
	const { data: transfers, pending } = useTransfers();
	return (
		<FriendlyList
			items={transfers}
			Component={TransferCard as any}
			indexedBy='id'
			isLoading={pending}
			emptyLabel="We haven't had any transactions"
		/>
	);
};
