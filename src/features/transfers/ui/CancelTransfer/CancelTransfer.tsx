import * as React from 'react';
import cn from 'classnames';
import { useMutation } from '@farfetched/react';
import { CommonProps } from '@/shared/types';
import { cancelTransferModel } from '../../model';

export interface CancelTransferProps extends CommonProps {
	readonly id: number;
}

export const CancelTransfer: React.FC<CancelTransferProps> = React.memo(
	function CancelTransfer(props) {
		const { className, id, } = props;

		const cancel = useMutation(cancelTransferModel.cancelMutation);

		const onClick = () => {
			cancel.start({ id, });
		};

		return (
			<button className={cn(className)} type='button' onClick={onClick}>
				Cancel
			</button>
		);
	}
);
