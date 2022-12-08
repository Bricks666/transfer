import cn from 'classnames';
import * as React from 'react';
import { Transfer } from '@/shared/api';
import { statusNames } from '@/shared/lib';
import { CommonProps } from '@/shared/types';

export interface TemplateTransferCardProps extends CommonProps, Transfer {
	readonly actions?: React.ReactElement | null;
}

export const TemplateTransferCard: React.FC<TemplateTransferCardProps> =
	React.memo(function TransferCard(props) {
		const {
			id,
			status,
			category_id: categoryId,
			description,
			money,
			receiver,
			sender,
			className,
			actions = null,
		} = props;

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
				{actions}
			</article>
		);
	});
