import { useUnit } from 'effector-react';
import * as React from 'react';
import { RequestActions } from '@/features/requests';
import { TemplateRequestCard } from '@/entities/requests';
import { Request } from '@/shared/api';
import { authModel } from '@/shared/models';
import { CommonProps } from '@/shared/types';

export interface RequestCardProps extends CommonProps, Request {}

export const RequestCard: React.FC<RequestCardProps> = (props) => {
	const { accept_voter: acceptVoter, cancel_voter: cancelVoter, id, } = props;
	const authUser = useUnit(authModel.$user);
	const isVote =
		authUser?.address === cancelVoter ||
		acceptVoter.includes(authUser?.address as string);
	let actions: React.ReactElement | null = null;

	if (!isVote) {
		actions = <RequestActions id={id} />;
	}

	return <TemplateRequestCard {...props} actions={actions} />;
};
