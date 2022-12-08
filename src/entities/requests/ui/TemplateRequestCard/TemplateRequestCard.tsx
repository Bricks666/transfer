import { Card, CardActions, CardContent, Typography } from '@mui/material';
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
		<Card className={className} component='article'>
			<CardContent>
				<Typography>Candidate: {candidate}</Typography>
				<Typography>
					Voters:{' '}
					<ul>
						{acceptVoter.map((voter) => (
							<li key={voter}> {voter}</li>
						))}
					</ul>
				</Typography>
				<Typography>Against: {cancelVoterLabel}</Typography>
				<Typography>Status: {statusNames[status]}</Typography>
			</CardContent>
			{actions ? <CardActions>{actions}</CardActions> : null}
		</Card>
	);
};
