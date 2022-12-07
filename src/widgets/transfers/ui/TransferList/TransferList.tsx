import * as React from 'react';
import { useTransfers } from '@/entities/transfers';
import { FriendlyList } from '@/shared/ui/FriendlyList';
import { TransferCard } from '../TransferCard';

export const TransferList: React.FC = () => {
	const { data: transfers, pending, } = useTransfers();
	return (
		<FriendlyList
			items={transfers}
			Component={TransferCard}
			indexedBy='id'
			isLoading={pending}
			emptyLabel="We haven't had any transactions"
		/>
	);
};
