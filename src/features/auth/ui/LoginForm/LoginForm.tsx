import { useMutation } from '@farfetched/react';
import { Button } from 'antd';
import * as React from 'react';
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
			<Button htmlType='submit' type='primary' loading={login.pending}>
				Login
			</Button>
		</form>
	);
});
