import { Button, ButtonGroup } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { acceptMutation, cancelMutation } from './model';

export interface RequestVotingProps extends CommonProps {
	readonly id: number;
}

export const RequestVoting: React.FC<RequestVotingProps> = (props) => {
	const { id, } = props;
	const accept = useUnit(acceptMutation);
	const cancel = useUnit(cancelMutation);

	const onAccept = () => {
		accept.start({ id, });
	};

	const onCancel = () => {
		cancel.start({ id, });
	};

	const isLoading = cancel.pending || accept.pending;

	return (
		<ButtonGroup variant='outlined'>
			<Button
				type='button'
				color='success'
				variant='contained'
				onClick={onAccept}
				disabled={isLoading}
				disableElevation>
				За
			</Button>
			<Button
				type='button'
				color='error'
				variant='contained'
				onClick={onCancel}
				disabled={isLoading}
				disableElevation>
				Против
			</Button>
		</ButtonGroup>
	);
};
