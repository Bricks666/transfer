import HowToVoteIcon from '@mui/icons-material/HowToVote';
import { IconButton, Tooltip } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import type { Address } from 'web3';
import { CommonProps } from '@/shared/types';
import { mutation } from '../model';

export interface SetOnRequestProps extends CommonProps {
	readonly candidate: Address;
}

export const SetOnRequest: React.FC<SetOnRequestProps> = (props) => {
	const { candidate, } = props;
	const createRequest = useUnit(mutation);

	const onClick = () => {
		createRequest.start({ candidate, });
	};

	return (
		<Tooltip title='Выставить пользователя на голосование'>
			<IconButton
				onClick={onClick}
				type='button'
				disabled={createRequest.pending}>
				<HowToVoteIcon />
			</IconButton>
		</Tooltip>
	);
};
