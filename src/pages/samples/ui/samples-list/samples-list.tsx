import { List, Paper } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { SampleItem } from '@/widgets/samples';
import { samplesModel } from '@/entities/samples';

import styles from './samples-list.module.css';

export const SampleList: React.FC = () => {
	const samples = useUnit(samplesModel.query);

	return (
		<Paper variant='outlined'>
			<List className={styles.list}>
				{samples.data.map((sample) => (
					<SampleItem {...sample} key={sample.id} />
				))}
			</List>
		</Paper>
	);
};
