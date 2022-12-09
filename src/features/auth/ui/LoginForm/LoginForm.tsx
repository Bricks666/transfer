import { Button } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import { useForm } from 'effector-react-form';
import * as React from 'react';
import { AddressesSelect } from '@/entities/web3';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { loginModel } from '../../model';

import styles from './LoginForm.module.css';

export const LoginForm: React.FC<CommonProps> = React.memo(function LoginForm(
	props
) {
	const { className, } = props;
	const { controller, handleSubmit, } = useForm({
		form: loginModel.form,
	});
	const isSubmitting = useUnit(loginModel.loginMutation.$pending);

	return (
		<form className={cn(styles.form, className)} onSubmit={handleSubmit}>
			<AddressesSelect
				label='Address'
				controller={controller({ name: loginModel.form.getNameStr('address'), })}
				autoComplete='name'
				required
			/>
			<Field
				label='password'
				controller={controller({
					name: loginModel.form.getNameStr('password'),
				})}
				type='password'
				required
			/>
			<Button
				className={styles.button}
				type='submit'
				variant='outlined'
				disabled={isSubmitting}>
				Login
			</Button>
		</form>
	);
});
