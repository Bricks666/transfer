import * as React from 'react';
import { useUnit } from 'effector-react';
import { CommonProps, Status } from '@/shared/types';
import { Transfer } from '@/shared/api';
import { TemplateTransferCard } from '@/entities/transfers';
import { authModel } from '@/entities/auth';
import { AcceptTransfer, CancelTransfer } from '@/features/transfers';

export interface TransferCardProps extends CommonProps, Transfer {}

export const TransferCard: React.FC<TransferCardProps> = React.memo(
	function TransferCard(props) {
		const { status, sender, id, } = props;
		const authAddress = useUnit(authModel.$address);
		const isSender = authAddress === sender;
		const isPending = status === Status.pending;

		let actions: React.ReactElement | null | undefined;
		if (isPending) {
			if (isSender) {
				actions = <CancelTransfer id={id} />;
			} else {
				actions = <AcceptTransfer id={id} />;
			}
		}

		return <TemplateTransferCard {...props} actions={actions} />;
	}
);
