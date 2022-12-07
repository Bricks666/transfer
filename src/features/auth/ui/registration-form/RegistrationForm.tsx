import { useMutation } from '@farfetched/react';
import * as React from 'react';
import { AddressesSelect } from '@/entities/web3';
import { useForm } from '@/shared/lib';
import { registrationModel } from '../../model';

export const RegistrationForm: React.FC = React.memo(
	function RegistrationForm() {
		const registration = useMutation(registrationModel.registrationMutation);
		const { onSubmit, } = useForm(registration.start);

		return (
			<form onSubmit={onSubmit}>
				<AddressesSelect name='address' />
				<input name='password' type='password' />
				<button type='submit'>Registration</button>
			</form>
		);
	}
);
