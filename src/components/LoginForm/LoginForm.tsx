import * as React from 'react';
import { useMutation } from '@farfetched/react';
import { authModel } from '@/models';
import { useAddresses, useForm } from '@/hooks';

export const LoginForm: React.FC = React.memo(function LoginForm() {
	const { data: addresses } = useAddresses();
	const login = useMutation(authModel.loginMutation);
	const { onSubmit } = useForm(login.start);

	return (
		<form onSubmit={onSubmit}>
			<select name='address' required>
				{addresses!.map((address) => (
					<option value={address} key={address}>
						{address}
					</option>
				))}
			</select>
			<input name='password' type='password' required />
			<button type='submit'>Login</button>
		</form>
	);
});
