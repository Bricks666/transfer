import * as React from 'react';
import { useMutation } from '@farfetched/react';
import { AddressesSelect } from '@/entities/web3';
import { useForm } from '@/shared/lib';
import { loginModel } from '../../model';

export const LoginForm: React.FC = React.memo(function LoginForm() {
	const login = useMutation(loginModel.loginMutation);
	const { onSubmit, } = useForm(login.start);

	return (
		<form onSubmit={onSubmit}>
			<AddressesSelect name='address' required />
			<input name='password' type='password' required />
			<button type='submit'>Login</button>
		</form>
	);
});
