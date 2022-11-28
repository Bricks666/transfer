import { useSendedTransfers } from '@/hooks';
import { FriendlyList } from '../FriendlyList';
import { TransferCard } from '../TransferCard';

export const SendedTransferList = () => {
	const transactions = useSendedTransfers();

	return (
		<FriendlyList
			items={transactions}
			Card={TransferCard}
			indexedBy='id'
			isLoading={false}
			emptyLabel="You haven't had any transactions"
		/>
	);
};
