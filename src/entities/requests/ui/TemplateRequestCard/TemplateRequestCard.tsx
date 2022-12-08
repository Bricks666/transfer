import * as React from 'react';
import { hexToNumberString } from 'web3-utils';
import { Request } from '@/shared/api';
import { statusNames } from '@/shared/lib';
import { CommonProps } from '@/shared/types';

export interface TemplateRequestCardProps extends CommonProps, Request {
	readonly actions?: React.ReactElement | null;
}

export const TemplateRequestCard: React.FC<TemplateRequestCardProps> = (
	props
) => {
	const {
		candidate,
		accept_voter: acceptVoter,
		cancel_voter: cancelVoter,
		status,
		className,
		actions,
	} = props;

	const cancelVoterLabel =
		hexToNumberString(cancelVoter) !== '0' ? cancelVoter : 'nobody';

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
			{actions}
		</div>
	);
};
