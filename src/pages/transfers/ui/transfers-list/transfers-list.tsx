import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { TransferCard } from '@/widgets/transfers';
import { transfersModel } from '@/entities/transfers';
import type { CommonProps } from '@/shared/types';

import styles from './transfers-list.module.css';

export const TransferList: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	const transfers = useUnit(transfersModel.query);
	return (
		<section className={cn(styles.container, className)}>
			{transfers.data.map((transfer) => (
				<TransferCard {...transfer} key={transfer.id} />
			))}
		</section>
	);
};
