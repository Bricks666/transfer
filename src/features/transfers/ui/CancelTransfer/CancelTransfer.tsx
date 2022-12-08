import { useMutation } from '@farfetched/react';
import { Button } from 'antd';
import cn from 'classnames';
import * as React from 'react';
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
			<Button
				className={cn(className)}
				onClick={onClick}
				type='primary'
				htmlType='button'
				danger>
				Cancel
			</Button>
		);
	}
);
