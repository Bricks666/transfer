import { useMutation } from '@farfetched/react';
import { Button } from 'antd';
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

	return (
		<div>
			<Button
				type='primary'
				htmlType='button'
				onClick={onAccept}
				disabled={cancel.pending}
				loading={accept.pending}>
				Approve
			</Button>
			<Button
				type='primary'
				htmlType='button'
				onClick={onCancel}
				disabled={accept.pending}
				loading={cancel.pending}
				danger>
				Reject
			</Button>
		</div>
	);
};
