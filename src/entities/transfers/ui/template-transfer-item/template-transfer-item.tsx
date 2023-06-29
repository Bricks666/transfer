import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
	Avatar,
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText
} from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { fromWei } from 'web3-utils';
import { statusNames } from '@/shared/lib';
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
	readonly actions?: React.ReactElement;
	readonly category?: React.ReactElement | null;
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

		return (
			<ListItem className={cn(styles.item, className)}>
				<ListItemAvatar>
					<Avatar className={avatarClasses}>{transferIcon}</Avatar>
				</ListItemAvatar>
				<ListItemText primary={primaryText} secondary={secondaryText} />
				<div className={styles.info}>
					<ListItemText className={cn(styles.short_text, styles.category)}>
						{category}
					</ListItemText>
					<ListItemText className={cn(styles.short_text, styles.status)}>
						{statusNames[status]}
					</ListItemText>
					<ListItemText className={cn(styles.short_text)}>
						{fromWei(money, 'ether')} ETH
					</ListItemText>
				</div>

				{actions ? (
					<ListItemSecondaryAction>{actions}</ListItemSecondaryAction>
				) : null}
			</ListItem>
		);
	});
