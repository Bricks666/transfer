import * as React from 'react';
import { useUnit } from 'effector-react';
import { RequestActions } from '@/features/requests';
import { authModel } from '@/entities/auth';
import { TemplateRequestCard } from '@/entities/requests';
import { CommonProps } from '@/shared/types';
import { Request } from '@/shared/api';

export interface RequestCardProps extends CommonProps, Request {}

export const RequestCard: React.FC<RequestCardProps> = (props) => {
	const { accept_voter: acceptVoter, cancel_voter: cancelVoter, id, } = props;
	const authAddress = useUnit(authModel.$address);
	const isVote =
		authAddress === cancelVoter || acceptVoter.includes(authAddress!);
	let actions: React.ReactElement | null = null;

	if (!isVote) {
		actions = <RequestActions id={id} />;
	}

	return <TemplateRequestCard {...props} actions={actions} />;
};
