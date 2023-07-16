import { Button } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import type { CommonProps } from '@/shared/types';
import { mutation } from './model';

export interface CancelTransferProps extends CommonProps {
	readonly id: number;
}

export const CancelTransfer: React.FC<CancelTransferProps> = React.memo(
	function CancelTransfer(props) {
		const { className, id, } = props;

		const cancel = useUnit(mutation);

		const onClick = () => {
			cancel.start({ id, });
		};

		return (
			<Button
				className={cn(className)}
				onClick={onClick}
				type='button'
				variant='contained'
				color='error'
				disabled={cancel.pending}
				disableElevation>
				Отклонить
			</Button>
		);
	}
);
