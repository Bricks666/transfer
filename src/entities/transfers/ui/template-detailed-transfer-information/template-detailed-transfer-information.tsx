/* eslint-disable camelcase */
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { fromWei } from 'web3-utils';
import { Transfer } from '@/shared/api';
import { statusNames, toDatetimeString } from '@/shared/lib';
import type { CommonProps } from '@/shared/types';

import styles from './template-detailed-transfer-information.module.css';

export interface TemplateDetailedTransferInformationProps
	extends CommonProps,
		Omit<Transfer, 'id' | 'keyword' | 'category_id'> {
	readonly category: React.ReactElement | null;
	readonly actions?: React.ReactElement | null;
}

export const TemplateDetailedTransferInformation: React.FC<TemplateDetailedTransferInformationProps> =
	React.memo(function TransferCard(props) {
		const {
			status,
			description,
			money,
			receiver,
			sender,
			className,
			category,
			finished_at,
			sended_at,
			actions = null,
		} = props;

		const createdAt = toDatetimeString(sended_at);
		const finishedAt = finished_at
			? toDatetimeString(finished_at)
			: 'Не завершено';

		return (
			<Card
				className={cn(className)}
				variant='outlined'
				elevation={0}
				component='article'>
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
					<Typography>
						<span className={styles.item}>Отправлено:</span> {createdAt}
					</Typography>
					<Typography>
						<span className={styles.item}>Завершено:</span> {finishedAt}
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
