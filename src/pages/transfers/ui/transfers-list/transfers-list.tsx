import { List, ListItem } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { TransferCard } from '@/widgets/transfers';
import { transfersModel } from '@/entities/transfers';

import styles from './transfers-list.module.css';

export const TransferList: React.FC = () => {
	const transfers = useUnit(transfersModel.query);
	return (
		<List className={styles.list}>
			{transfers.data.map((transfer) => (
				<ListItem className={styles.item} key={transfer.id}>
					<TransferCard className={styles.card} {...transfer} />
				</ListItem>
			))}
		</List>
	);
};
