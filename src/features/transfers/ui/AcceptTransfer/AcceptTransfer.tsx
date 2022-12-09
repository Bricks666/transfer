import { useMutation } from '@farfetched/react';
import { Button, TextField } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { AcceptTransferParams } from '@/shared/api';
import { useForm } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { acceptTransferModel } from '../../model';

import styles from './AcceptTransfer.module.css';

export interface AcceptTransferProps extends CommonProps {
	readonly id: string;
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
		<form className={cn(styles.form, className)} onSubmit={onSubmit}>
			<TextField
				name='keyword'
				label='Keyword'
				placeholder='keyword'
				type='password'
				required
			/>
			<Button
				type='submit'
				variant='outlined'
				color='success'
				disabled={accept.pending}>
				Accept
			</Button>
		</form>
	);
};
