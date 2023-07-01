import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { prepareMoney, statusNames } from '@/shared/lib';
import type { CommonProps } from '@/shared/types';
import { AddressLabel } from '@/shared/ui';
import { type IdentifiedTransfer, TRANSFER_TYPE } from '../../model';

import styles from './template-transfer-item.module.css';

export interface TemplateTransferItemProps
	extends CommonProps,
		Omit<
			IdentifiedTransfer,
			| 'description'
			| 'id'
			| 'finished_at'
			| 'sended_at'
			| 'category_id'
			| 'keyword'
		> {
	readonly actions?: React.ReactElement | null;
	readonly category?: React.ReactElement | null;
	readonly extra?: React.ReactElement | null;
}

export const TemplateTransferItem: React.FC<TemplateTransferItemProps> =
	React.memo(function TemplateTransferItem(props) {
		const {
			status,
			money,
			receiver,
			sender,
			className,
			category,
			type,
			actions,
			extra,
		} = props;

		const isIncoming = type === TRANSFER_TYPE.INCOMING;

		const transferIcon = isIncoming ? <AddIcon /> : <RemoveIcon />;

		const senderLabel = (
			<AddressLabel
				className={styles.address}
				prefix='Отправитель: '
				address={sender}
				short
			/>
		);
		const receiverLabel = (
			<AddressLabel
				className={styles.address}
				prefix='Получатель: '
				address={receiver}
				short
			/>
		);
		const primaryText = isIncoming ? senderLabel : receiverLabel;
		const secondaryText = isIncoming ? receiverLabel : senderLabel;

		const avatarClasses = isIncoming ? styles.incoming : styles.outgoing;
		const { money: preparedMoney, unitName, } = prepareMoney({
			money,
			precision: 6,
		});

		return (
			<ListItem className={cn(styles.item, className)}>
				<ListItemAvatar>
					<Avatar className={avatarClasses}>{transferIcon}</Avatar>
				</ListItemAvatar>
				<ListItemText primary={primaryText} secondary={secondaryText} />
				<div className={styles.info}>
					<ListItemText className={styles.category}>{category}</ListItemText>
					<ListItemText className={styles.status}>
						{statusNames[status]}
					</ListItemText>
					<ListItemText className={styles.money}>
						{preparedMoney} {unitName}
					</ListItemText>
				</div>
				{actions ? <div className={styles.actions}>{actions}</div> : null}
				{extra}
			</ListItem>
		);
	});
