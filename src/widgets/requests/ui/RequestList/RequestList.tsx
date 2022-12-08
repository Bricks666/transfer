import { List, ListItem } from '@mui/material';
import * as React from 'react';
import { useRequests } from '@/entities/requests';
import { RequestCard } from '../RequestCard';

import styles from './RequestsList.module.css';

export const RequestList: React.FC = () => {
	const { data: requests, } = useRequests();

	return (
		<List className={styles.list}>
			{requests.map((request) => (
				<ListItem className={styles.item} key={request.id}>
					<RequestCard className={styles.card} {...request} />
				</ListItem>
			))}
		</List>
	);
};
