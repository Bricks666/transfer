import { useMutation } from '@farfetched/react';
import { Button } from 'antd';
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
				<Button type='primary' htmlType='submit' loading={registration.pending}>
					Registration
				</Button>
			</form>
		);
	}
);
