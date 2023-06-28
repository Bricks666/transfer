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
import type { CommonProps } from '@/shared/types';

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
			<Card
				className={cn(className)}
				variant='outlined'
				elevation={0}
				component='article'>
				<CardHeader
					title={`Номер перевода: ${id + 1}`}
					titleTypographyProps={{
						className: styles.title,
					}}
				/>
				<CardContent className={styles.content}>
					<Typography>
						<span className={styles.item}>Отправитель:</span> {sender}
					</Typography>
					<Typography>
						<span className={styles.item}>Получатель:</span> {receiver}
					</Typography>
					<Typography>
						<span className={styles.item}>Категория:</span> {category}
					</Typography>
					<Typography>
						<span className={styles.item}>Сумма перевода:</span>{' '}
						{fromWei(money, 'ether')} ETH
					</Typography>
					{description ? (
						<Typography>
							<span className={styles.item}>Описание:</span> {description}
						</Typography>
					) : null}
					<Typography>
						<span className={styles.item}>Статус:</span> {statusNames[status]}
					</Typography>
				</CardContent>
				{actions ? (
					<CardActions className={styles.actions}>{actions}</CardActions>
				) : null}
			</Card>
		);
	});
