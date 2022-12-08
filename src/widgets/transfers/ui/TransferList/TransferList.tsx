import * as React from 'react';
import { useTransfers } from '@/entities/transfers';
import { FriendlyList } from '@/shared/ui/FriendlyList';
import { TransferCard } from '../TransferCard';

import styles from './TransferList.module.css';

export const TransferList: React.FC = () => {
	const { data: transfers, pending, } = useTransfers();
	return (
		<FriendlyList
			className={styles.list}
			items={transfers}
			Component={TransferCard}
			indexedBy='id'
			isLoading={pending}
			emptyLabel="We haven't had any transactions"
		/>
	);
};
