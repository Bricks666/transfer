import * as React from 'react';
import cn from 'classnames';
import { Transfer } from '@/shared/models';
import { CommonProps, Status } from '@/shared/types';
import { statusNames } from '@/shared/configs';
import { AcceptTransferForm } from './AcceptTransferForm';
import { CancelTransfer } from './CancelTransfer';

export interface TransferCardProps extends CommonProps, Transfer {
	readonly isSender: boolean;
	readonly isReceiver: boolean;
}

export const TransferCard: React.FC<TransferCardProps> = React.memo(
	function TransferCard(props) {
		const {
			id,
			status,
			category_id: categoryId,
			description,
			money,
			receiver,
			sender,
			isReceiver,
			isSender,
			className,
		} = props;
		let action: React.ReactElement | null = null;
		const isPending = status === Status.pending;
		if (isPending) {
			if (isReceiver) {
				action = <AcceptTransferForm id={id} />;
			} else if (isSender) {
				action = <CancelTransfer id={id} />;
			}
		}
		return (
			<article className={cn(className)}>
				<dl>
					<dt>Number:</dt>
					<dd>{id}</dd>
					<dt>Sender:</dt>
					<dd>{sender}</dd>
					<dt>Receiver</dt>
					<dd>{receiver}</dd>
					<dt>Category</dt>
					<dd>{categoryId}</dd>
					<dt>Count</dt>
					<dd>{money}</dd>
					<dt>Description</dt>
					<dd>{description}</dd>
					<dt>Status</dt>
					<dd>{statusNames[status]}</dd>
				</dl>
				{action}
			</article>
		);
	}
);