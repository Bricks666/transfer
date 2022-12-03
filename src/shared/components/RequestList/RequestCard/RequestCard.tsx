import * as React from 'react';
import { hexToNumberString } from 'web3-utils';
import { useMutation } from '@farfetched/react';
import { useUnit } from 'effector-react';
import { authModel, Request, requestsModel } from '@/shared/models';
import { CommonProps } from '@/shared/types';
import { statusNames } from '@/shared/consts';

export interface RequestCardProps extends CommonProps, Request {}

export const RequestCard: React.FC<RequestCardProps> = (props) => {
	const {
		candidate,
		accept_voter: acceptVoter,
		cancel_voter: cancelVoter,
		id,
		status,
		className,
	} = props;
	const authAddress = useUnit(authModel.$address) ?? '';
	const accept = useMutation(requestsModel.acceptMutation);
	const cancel = useMutation(requestsModel.cancelMutation);

	const isVote =
		authAddress === cancelVoter || acceptVoter.includes(authAddress);
	const cancelVoterLabel =
		hexToNumberString(cancelVoter) !== '0' ? cancelVoter : 'nobody';
	const onAccept = () => {
		accept.start({ id });
	};

	const onCancel = () => {
		cancel.start({ id });
	};

	return (
		<div className={className}>
			<dl>
				<dt>Candidate:</dt> <dd>{candidate}</dd>
				<dt>Voters</dt>
				<dd>
					<ul>
						{acceptVoter.map((voter) => (
							<li key={voter}> {voter}</li>
						))}
					</ul>
				</dd>
				<dt>Against:</dt> <dd>{cancelVoterLabel}</dd>
				<dt>Status:</dt> <dd>{statusNames[status]}</dd>
			</dl>
			{!isVote ? (
				<>
					<button type='button' onClick={onAccept}>
						Approve
					</button>
					<button type='button' onClick={onCancel}>
						Reject
					</button>
				</>
			) : null}
		</div>
	);
};
