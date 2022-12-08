import { useMutation } from '@farfetched/react';
import { Button } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { AddressesSelect } from '@/entities/web3';
import { useForm } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { loginModel } from '../../model';

import styles from './LoginForm.module.css';

export const LoginForm: React.FC<CommonProps> = React.memo(function LoginForm(
	props
) {
	const { className, } = props;
	const login = useMutation(loginModel.loginMutation);
	const { onSubmit, } = useForm(login.start);

	return (
		<form className={cn(styles.form, className)} onSubmit={onSubmit}>
			<AddressesSelect
				label='Address'
				name='address'
				autoComplete='name'
				required
			/>
			<Field label='password' name='password' type='password' required />
			<Button
				className={styles.button}
				type='submit'
				variant='outlined'
				disabled={login.pending}>
				Login
			</Button>
		</form>
	);
});
