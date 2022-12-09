import { List, ListItem } from '@mui/material';
import * as React from 'react';
import { useTransfers } from '@/entities/transfers';
import { TransferCard } from '../TransferCard';

import styles from './TransferList.module.css';

export const TransferList: React.FC = () => {
	const { data: transfers, } = useTransfers();
	return (
		<List className={styles.list}>
			{transfers.map((transfer) => (
				<ListItem className={styles.item} key={transfer.id}>
					<TransferCard className={styles.card} {...transfer} />
				</ListItem>
			))}
		</List>
	);
};
