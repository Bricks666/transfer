import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Typography
} from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { fromWei } from 'web3-utils';
import { Transfer } from '@/shared/api';
import { statusNames } from '@/shared/lib';
import { CommonProps } from '@/shared/types';

import styles from './template-transfer-card.module.css';

export interface TemplateTransferCardProps extends CommonProps, Transfer {
	readonly category: React.ReactElement | null;
	readonly actions?: React.ReactElement | null;
}

export const TemplateTransferCard: React.FC<TemplateTransferCardProps> =
	React.memo(function TransferCard(props) {
		const {
			id,
			status,
			description,
			money,
			receiver,
			sender,
			className,
			category,
			actions = null,
		} = props;

		return (
			<Card className={cn(className)} variant='outlined' component='article'>
				<CardHeader title={`Номер перевода: ${id}`} />
				<CardContent className={styles.content}>
					<Typography>Отправитель: {sender}</Typography>
					<Typography>Получатель: {receiver}</Typography>
					<Typography>Категория: {category}</Typography>
					<Typography>Сумма перевода: {fromWei(money, 'ether')} ETH</Typography>
					{description ? (
						<Typography>Описание: {description}</Typography>
					) : null}
					<Typography>Статус: {statusNames[status]}</Typography>
				</CardContent>
				{actions ? (
					<CardActions className={styles.actions}>{actions}</CardActions>
				) : null}
			</Card>
		);
	});
