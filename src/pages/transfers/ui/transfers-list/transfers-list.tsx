import { Paper, Typography } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { TransferCard } from '@/widgets/transfers';
import { transfersModel } from '@/entities/transfers';

import { CommonProps } from '@/shared/types';
import styles from './transfers-list.module.css';

export const TransferList: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	const transfers = useUnit(transfersModel.query);
	return (
		<Paper
			className={cn(styles.container, className)}
			variant='outlined'
			component='section'>
			<Typography className={styles.title} variant='h4' component='h2'>
				История переводов
			</Typography>
			<div className={styles.list}>
				{transfers.data.map((transfer) => (
					<TransferCard {...transfer} key={transfer.id} />
				))}
			</div>
		</Paper>
	);
};
