import { Button } from '@mui/material';
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
		<Button
			onClick={onClick}
			type='button'
			variant='outlined'
			disabled={createRequest.pending}>
			Set on request
		</Button>
	);
};
