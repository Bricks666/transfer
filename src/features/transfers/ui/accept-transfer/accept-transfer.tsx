import { Button } from '@mui/material';
import cn from 'classnames';
import { useForm } from 'effector-forms';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { useSubmit } from '@/shared/lib';
import { BasePopupProps, VoidFunction } from '@/shared/types';
import { Field, MainPopup } from '@/shared/ui';
import { acceptTransferModel } from '../../model';

import styles from './accept-transfer.module.css';

export interface AcceptTransferProps extends BasePopupProps {}

export const AcceptTransfer: React.FC<AcceptTransferProps> = (props) => {
	const { className, isOpen, } = props;
	const [onClose, isSubmitting] = useUnit([
		acceptTransferModel.popup.close,
		acceptTransferModel.mutation.$pending
	]);
	const { fields, submit, } = useForm(acceptTransferModel.form);

	const { keyword, } = fields;
	const onSubmit = useSubmit(submit);

	return (
		<MainPopup
			isOpen={isOpen}
			onClose={onClose as VoidFunction}
			title='Введите ключевое слово'>
			<form className={cn(styles.form, className)} onSubmit={onSubmit}>
				<Field
					value={keyword.value}
					onChange={keyword.onChange}
					onBlur={keyword.onBlur}
					helperText={keyword.errorText()}
					isValid={keyword.isValid}
					name={keyword.name}
					label='Keyword'
					placeholder='keyword'
					type='password'
					required
				/>
				<Button
					type='submit'
					variant='outlined'
					color='success'
					disabled={isSubmitting}>
					Accept
				</Button>
			</form>
		</MainPopup>
	);
};
