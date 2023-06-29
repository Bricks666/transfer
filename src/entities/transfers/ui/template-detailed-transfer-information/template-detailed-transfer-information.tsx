/* eslint-disable camelcase */
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { fromWei } from 'web3-utils';
import { Transfer } from '@/shared/api';
import { statusNames, toDatetimeString } from '@/shared/lib';
import { deviceInfoModel } from '@/shared/models';
import type { CommonProps } from '@/shared/types';

import { AddressLabel } from '@/shared/ui';
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

		const [isMobile, isTableVertical] = useUnit([
			deviceInfoModel.$isMobile,
			deviceInfoModel.$isTabletVertical
		]);

		const shortAddress = isMobile || isTableVertical;

		const createdAt = toDatetimeString(sended_at);
		const finishedAt = finished_at
			? toDatetimeString(finished_at)
			: 'Не завершено';

		return (
			<Card
				className={cn(className)}
				variant='outlined'
				elevation={0}
				component='article'
				square>
				<CardContent className={styles.content}>
					<AddressLabel
						className={styles.row}
						prefix={<span className={styles.item}>Отправитель: </span>}
						address={sender}
						short={shortAddress}
					/>
					<AddressLabel
						className={styles.row}
						prefix={<span className={styles.item}>Получатель: </span>}
						address={receiver}
						short={shortAddress}
					/>
					<Typography className={styles.row}>
						<span className={styles.item}>Категория:</span> {category}
					</Typography>
					<Typography className={styles.row}>
						<span className={styles.item}>Сумма перевода:</span>{' '}
						{fromWei(money, 'ether')} ETH
					</Typography>
					<Typography className={styles.row}>
						<span className={styles.item}>Отправлено:</span> {createdAt}
					</Typography>
					<Typography className={styles.row}>
						<span className={styles.item}>Завершено:</span> {finishedAt}
					</Typography>
					{description ? (
						<Typography className={styles.row}>
							<span className={styles.item}>Описание:</span> {description}
						</Typography>
					) : null}
					<Typography className={styles.row}>
						<span className={styles.item}>Статус:</span> {statusNames[status]}
					</Typography>
				</CardContent>
				{actions ? (
					<CardActions className={styles.actions}>{actions}</CardActions>
				) : null}
			</Card>
		);
	});
