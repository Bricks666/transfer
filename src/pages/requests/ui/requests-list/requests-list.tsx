import { List, ListItem } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { RequestCard } from '@/widgets/requests';
import { requestsModel } from '@/entities/requests';

import styles from './requests-list.module.css';

export const RequestList: React.FC = () => {
	const requests = useUnit(requestsModel.query);

	return (
		<List className={styles.list}>
			{requests.data.map((request) => (
				<ListItem className={styles.item} key={request.id}>
					<RequestCard className={styles.card} {...request} />
				</ListItem>
			))}
		</List>
	);
};
