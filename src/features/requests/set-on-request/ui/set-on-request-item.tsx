import HowToVoteIcon from '@mui/icons-material/HowToVote';
import { ListItemIcon, MenuItem } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import type { Address } from 'web3';
import { CommonProps } from '@/shared/types';
import { mutation } from '../model';

export interface SetOnRequestItemProps extends CommonProps {
	readonly candidate: Address;
	readonly disabled?: boolean;
}

export const SetOnRequestItem: React.FC<SetOnRequestItemProps> = (props) => {
	const { candidate, disabled, className, } = props;
	const createRequest = useUnit(mutation);

	const onClick = () => {
		createRequest.start({ candidate, });
	};

	return (
		<MenuItem className={className} onClick={onClick} disabled={disabled}>
			<ListItemIcon>
				<HowToVoteIcon />
			</ListItemIcon>
			На голосование
		</MenuItem>
	);
};
