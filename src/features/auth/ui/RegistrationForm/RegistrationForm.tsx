import { Button } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import { useForm } from 'effector-react-form';
import * as React from 'react';
import { AddressesSelect } from '@/entities/web3';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { registrationModel } from '../../model';

import styles from './RegistrationForm.module.css';

export const RegistrationForm: React.FC<CommonProps> = React.memo(
	function RegistrationForm(props) {
		const { className, } = props;
		const { handleSubmit, controller, } = useForm({
			form: registrationModel.form,
		});
		const isSubmitting = useUnit(
			registrationModel.registrationMutation.$pending
		);

		return (
			<form className={cn(styles.form, className)} onSubmit={handleSubmit}>
				<AddressesSelect
					label='Address'
					controller={controller({
						name: registrationModel.form.getNameStr('address'),
					})}
					required
				/>
				<Field
					label='Password'
					controller={controller({
						name: registrationModel.form.getNameStr('password'),
					})}
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
