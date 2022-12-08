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

import styles from './TemplateTransferCard.module.css';

export interface TemplateTransferCardProps extends CommonProps, Transfer {
	readonly category: React.ReactElement;
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
			<Card className={cn(className)} component='article'>
				<CardHeader title={`Number: ${id}`} />
				<CardContent className={styles.content}>
					<Typography>Sender: {sender}</Typography>
					<Typography>Receiver: {receiver}</Typography>
					<Typography>Category: {category}</Typography>
					<Typography>Count: {fromWei(money, 'ether')} ETH</Typography>
					<Typography>Description: {description}</Typography>
					<Typography>Status: {statusNames[status]}</Typography>
				</CardContent>
				<CardActions>{actions}</CardActions>
			</Card>
		);
	});
