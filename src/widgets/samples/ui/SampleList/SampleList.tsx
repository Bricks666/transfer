import { List, ListItem } from '@mui/material';
import * as React from 'react';
import { useSamples } from '@/entities/samples';
import { SampleCard } from '../SampleCard';

import styles from './SampleList.module.css';

export const SampleList: React.FC = () => {
	const { data: samples, } = useSamples();

	return (
		<List className={styles.list}>
			{samples.map((sample) => (
				<ListItem className={styles.item} key={sample.id}>
					<SampleCard className={styles.card} {...sample} />
				</ListItem>
			))}
		</List>
	);
};
