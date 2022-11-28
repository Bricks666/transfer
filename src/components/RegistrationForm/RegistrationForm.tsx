import * as React from 'react';
import { useMutation } from '@farfetched/react';
import { authModel } from '@/models';
import { useAddresses, useForm } from '@/hooks';

export const RegistrationForm: React.FC = React.memo(
	function RegistrationForm() {
		const { data: addresses } = useAddresses();
		const registration = useMutation(authModel.registrationMutation);
		const { onSubmit } = useForm(registration.start);

		return (
			<form onSubmit={onSubmit}>
				<select name='address' required>
					{addresses!.map((address) => (
						<option value={address} key={address}>
							{address}
						</option>
					))}
				</select>
				<input name='password' type='password' />
				<button type='submit'>Registration</button>
			</form>
		);
	}
);
