import { List, ListItem } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { SampleCard } from '@/widgets/samples';
import { samplesModel } from '@/entities/samples';

import styles from './samples-list.module.css';

export const SampleList: React.FC = () => {
	const samples = useUnit(samplesModel.query);

	return (
		<List className={styles.list}>
			{samples.data.map((sample) => (
				<ListItem className={styles.item} key={sample.id}>
					<SampleCard className={styles.card} {...sample} />
				</ListItem>
			))}
		</List>
	);
};
