import { useMutation } from '@farfetched/react';
import { Button, ButtonGroup } from '@mui/material';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { requestActionsModel } from '../../model';

export interface RequestActionsProps extends CommonProps {
	readonly id: number;
}

export const RequestActions: React.FC<RequestActionsProps> = (props) => {
	const { id, } = props;
	const accept = useMutation(requestActionsModel.acceptMutation);
	const cancel = useMutation(requestActionsModel.cancelMutation);

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
				onClick={onAccept}
				disabled={isLoading}>
				Approve
			</Button>
			<Button
				type='button'
				color='error'
				onClick={onCancel}
				disabled={isLoading}>
				Reject
			</Button>
		</ButtonGroup>
	);
};
