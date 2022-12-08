import { useMutation } from '@farfetched/react';
import { Button } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { AddressesSelect } from '@/entities/web3';
import { useForm } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { registrationModel } from '../../model';

import styles from './RegistrationForm.module.css';

export const RegistrationForm: React.FC<CommonProps> = React.memo(
	function RegistrationForm(props) {
		const { className, } = props;
		const registration = useMutation(registrationModel.registrationMutation);
		const { onSubmit, } = useForm(registration.start);

		return (
			<form className={cn(styles.form, className)} onSubmit={onSubmit}>
				<AddressesSelect label='Address' name='address' required />
				<Field label='Password' name='password' type='password' required />
				<Button
					className={styles.button}
					type='submit'
					variant='outlined'
					disabled={registration.pending}>
					Registration
				</Button>
			</form>
		);
	}
);
