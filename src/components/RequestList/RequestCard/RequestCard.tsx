import * as React from 'react';
import { hexToNumberString } from 'web3-utils';
import { useMutation } from '@farfetched/react';
import { useUnit } from 'effector-react';
import { authModel, Request, requestsModel } from '@/models';
import { CommonProps } from '@/types';
import { statusNames } from '@/consts';

export interface RequestCardProps extends CommonProps, Request {}

export const RequestCard: React.FC<RequestCardProps> = (props) => {
	const { candidate, accept_voter, cancel_voter, id, status, className } =
		props;
	const authAddress = useUnit(authModel.$address) ?? '';
	const accept = useMutation(requestsModel.acceptMutation);
	const cancel = useMutation(requestsModel.cancelMutation);

	const isVote =
		authAddress === cancel_voter || accept_voter.includes(authAddress);
	const cancelVoterLabel =
		hexToNumberString(cancel_voter) !== '0' ? cancel_voter : 'nobody';
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
						{accept_voter.map((voter) => (
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
