import { Button } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { cancelTransferModel } from '../../model';

export interface CancelTransferProps extends CommonProps {
	readonly id: string;
}

export const CancelTransfer: React.FC<CancelTransferProps> = React.memo(
	function CancelTransfer(props) {
		const { className, id, } = props;

		const cancel = useUnit(cancelTransferModel.mutation);

		const onClick = () => {
			cancel.start({ id, });
		};

		return (
			<Button
				className={cn(className)}
				onClick={onClick}
				type='button'
				variant='outlined'
				color='error'
				disabled={cancel.pending}>
				Отменить
			</Button>
		);
	}
);
