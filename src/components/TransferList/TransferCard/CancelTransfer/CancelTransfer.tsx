import * as React from 'react';
import cn from 'classnames';
import { useMutation } from '@farfetched/react';
import { transfersModel } from '@/models';
import { CommonProps } from '@/types';

import styles from './CancelTransfer.module.css';

export interface CancelTransferProps extends CommonProps {
	readonly id: number;
}

export const CancelTransfer: React.FC<CancelTransferProps> = React.memo(
	function CancelTransfer(props) {
		const { className, id } = props;

		const cancel = useMutation(transfersModel.cancelMutation);

		const onClick = () => {
			cancel.start({ id });
		};

		return (
			<button
				className={cn(styles.cancelTransfer, className)}
				type='button'
				onClick={onClick}>
				Cancel
			</button>
		);
	}
);
