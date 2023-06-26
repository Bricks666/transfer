import { Alert, AlertTitle, Button } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { Web3AddressesSearch } from '@/entities/web3';
import { useSubmit } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { form, mutation } from './model';

import styles from './ui.module.css';

export const LoginForm: React.FC<CommonProps> = React.memo(function LoginForm(
	props
) {
	const { className, } = props;
	const submit = useUnit(form.submit);
	const isSubmitting = useUnit(mutation.$pending);

	const onSubmit = useSubmit(submit);

	return (
		<form className={cn(styles.form, className)} onSubmit={onSubmit}>
			<ErrorAlert />
			<Address />
			<Password />
			<Button
				className={styles.button}
				type='submit'
				variant='contained'
				disabled={isSubmitting}
				disableElevation>
				Войти
			</Button>
		</form>
	);
});

const Address: React.FC = React.memo(() => {
	const address = useUnit(form.fields.address);
	return (
		<Web3AddressesSearch
			value={address.value}
			onChange={address.onChange}
			onBlur={address.onBlur}
			helperText={address.errorText}
			isValid={address.isValid}
			name='address'
			label='Адрес кошелька'
			autoComplete='name'
			required
		/>
	);
});

const Password: React.FC = React.memo(() => {
	const password = useUnit(form.fields.password);
	return (
		<Field
			value={password.value}
			onChange={password.onChange}
			onBlur={password.onBlur}
			helperText={password.errorText}
			isValid={password.isValid}
			name='password'
			label='Пароль'
			type='password'
			required
		/>
	);
});

const ErrorAlert: React.FC = React.memo(() => {
	const hasError = useUnit(mutation.$failed);

	if (!hasError) {
		return null;
	}

	return (
		<Alert severity='error'>
			<AlertTitle>Ошибка</AlertTitle>
			Неверный логин или пароль
		</Alert>
	);
});
