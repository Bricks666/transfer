import * as React from 'react';
import { useMutation } from '@farfetched/react';
import { AddressesSelect } from '@/entities/web3';
import { useForm } from '@/shared/lib';
import { registrationMutation } from '../../model';

export const RegistrationForm: React.FC = React.memo(
	function RegistrationForm() {
		const registration = useMutation(registrationMutation);
		const { onSubmit, } = useForm(registration.start);

		return (
			<form onSubmit={onSubmit}>
				<AddressesSelect />
				<input name='password' type='password' />
				<button type='submit'>Registration</button>
			</form>
		);
	}
);
