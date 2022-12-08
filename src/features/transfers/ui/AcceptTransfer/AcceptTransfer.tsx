import { useMutation } from '@farfetched/react';
import { Button } from 'antd';
import cn from 'classnames';
import * as React from 'react';
import { AcceptTransferParams } from '@/shared/api';
import { useForm } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { acceptTransferModel } from '../../model';

export interface AcceptTransferProps extends CommonProps {
	readonly id: number;
}

export const AcceptTransfer: React.FC<AcceptTransferProps> = (props) => {
	const { id, className, } = props;
	const accept = useMutation(acceptTransferModel.acceptMutation);
	const submit = React.useCallback(
		(data: Pick<AcceptTransferParams, 'keyword'>) =>
			accept.start({ ...data, id, }),
		[id, accept.start]
	);
	const { onSubmit, } = useForm(submit);

	return (
		<form className={cn(className)} onSubmit={onSubmit}>
			<input name='keyword' placeholder='keyword' type='password' required />
			<Button type='primary' htmlType='submit'>
				Accept
			</Button>
		</form>
	);
};
