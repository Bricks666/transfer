import { Tooltip, Typography } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import type { Address } from 'web3';
import { prepareMoney } from '@/shared/lib';
import type { CommonProps } from '@/shared/types';

import { useBalance } from '../../lib';
import styles from './balance.module.css';

export interface BalanceProps extends CommonProps {
	readonly address: Address | null;
	readonly title?: string;
}

export const Balance: React.FC<BalanceProps> = React.memo(function Balance(
	props
) {
	const { className, address, title = 'Текущий баланс пользователя', } = props;
	const balance = useBalance({ address, });

	const { money: preparedBalance, unitName, } = prepareMoney({
		money: balance,
		precision: 3,
	});
	return (
		<Tooltip title={title}>
			<Typography className={cn(styles.wrapper, className)} component='span'>
				{preparedBalance} <span className={styles.currency}>{unitName}</span>
			</Typography>
		</Tooltip>
	);
});
