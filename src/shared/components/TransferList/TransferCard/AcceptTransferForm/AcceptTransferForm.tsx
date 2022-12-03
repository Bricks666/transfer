import * as React from 'react';
import cn from 'classnames';
import { useMutation } from '@farfetched/react';
import { AcceptTransferParams, transfersModel } from '@/shared/models';
import { CommonProps } from '@/shared/types';
import { useForm } from '@/shared/hooks';

export interface AcceptTransferFormProps extends CommonProps {
	readonly id: number;
}

export const AcceptTransferForm: React.FC<AcceptTransferFormProps> = (
	props
) => {
	const { id, className } = props;
	const accept = useMutation(transfersModel.acceptMutation);
	const submit = React.useCallback(
		(data: Pick<AcceptTransferParams, 'keyword'>) =>
			accept.start({ ...data, id }),
		[id, accept.start]
	);
	const { onSubmit } = useForm(submit);

	return (
		<form className={cn(className)} onSubmit={onSubmit}>
			<input placeholder='keyword' type='password' required />
			<button type='submit'>Accept</button>
		</form>
	);
};
