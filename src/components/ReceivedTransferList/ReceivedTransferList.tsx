import { useReceivedTransfers } from '@/hooks';
import { FriendlyList } from '../FriendlyList';
import { TransferCard } from '../TransferCard';

export const ReceivedTransferList = () => {
	const transactions = useReceivedTransfers();
	console.log(transactions);
	return (
		<FriendlyList
			items={transactions}
			Card={TransferCard}
			indexedBy='id'
			isLoading={false}
			emptyLabel="We haven't had any transactions"
		/>
	);
};
