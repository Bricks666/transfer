import * as React from 'react';
import { useMutation } from '@farfetched/react';
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
	return (
		<div>
			<button type='button' onClick={onAccept}>
				Approve
			</button>
			<button type='button' onClick={onCancel}>
				Reject
			</button>
		</div>
	);
};
