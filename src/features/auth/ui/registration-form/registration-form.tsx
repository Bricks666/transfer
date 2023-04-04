import { Button } from '@mui/material';
import cn from 'classnames';
import { useForm } from 'effector-forms';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { AddressesSelect } from '@/entities/web3';
import { useSubmit } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { registrationModel } from '../../model';

import styles from './registration-form.module.css';

export const RegistrationForm: React.FC<CommonProps> = React.memo(
	function RegistrationForm(props) {
		const { className, } = props;
		const { submit, fields, } = useForm(registrationModel.form);
		const isSubmitting = useUnit(registrationModel.mutation.$pending);

		const { address, password, } = fields;
		const onSubmit = useSubmit(submit);

		return (
			<form className={cn(styles.form, className)} onSubmit={onSubmit}>
				<AddressesSelect
					value={address.value}
					onChange={address.onChange}
					onBlur={address.onBlur}
					helperText={address.errorText()}
					isValid={address.isValid}
					name={address.name}
					label='Address'
					required
				/>
				<Field
					value={password.value}
					onChange={password.onChange}
					onBlur={password.onBlur}
					helperText={password.errorText()}
					isValid={password.isValid}
					name={password.name}
					label='password'
					type='password'
					required
				/>
				<Button
					className={styles.button}
					type='submit'
					variant='outlined'
					disabled={isSubmitting}>
					Registration
				</Button>
			</form>
		);
	}
);
