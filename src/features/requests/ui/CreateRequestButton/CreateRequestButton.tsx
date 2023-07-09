import BallotIcon from '@mui/icons-material/Ballot';
import { IconButton, Tooltip } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import type { Address } from 'web3';
import { CommonProps } from '@/shared/types';
import { createRequestModel } from '../../model';

export interface CreateRequestButtonProps extends CommonProps {
	readonly candidate: Address;
}

export const CreateRequestButton: React.FC<CreateRequestButtonProps> = (
	props
) => {
	const { candidate, } = props;
	const createRequest = useUnit(createRequestModel.mutation);

	const onClick = () => {
		createRequest.start({ candidate, });
	};

	return (
		<Tooltip title='Выставить пользователя на голосование'>
			<IconButton
				onClick={onClick}
				type='button'
				disabled={createRequest.pending}>
				<BallotIcon />
			</IconButton>
		</Tooltip>
	);
};
