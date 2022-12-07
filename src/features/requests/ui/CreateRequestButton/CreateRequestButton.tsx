import * as React from 'react';
import { useMutation } from '@farfetched/react';
import { Address, CommonProps } from '@/shared/types';
import { createRequestModel } from '../../model';

export interface CreateRequestButtonProps extends CommonProps {
	readonly candidate: Address;
}

export const CreateRequestButton: React.FC<CreateRequestButtonProps> = (
	props
) => {
	const { candidate, } = props;
	const createRequest = useMutation(createRequestModel.addMutation);
	const onClick = () => {
		createRequest.start({ candidate, });
	};
	return (
		<button onClick={onClick} type='button'>
			Set on request
		</button>
	);
};
