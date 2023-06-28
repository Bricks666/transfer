import { Button } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { useSubmit } from '@/shared/lib';
import type { BasePopupProps, VoidFunction } from '@/shared/types';
import { MainPopup, PasswordField } from '@/shared/ui';
import { mutation, form, popup } from './model';

import styles from './ui.module.css';

export interface AcceptTransferProps extends BasePopupProps {}

export const AcceptTransfer: React.FC<AcceptTransferProps> = (props) => {
	const { className, isOpen, } = props;
	const [onClose, isSubmitting] = useUnit([popup.close, mutation.$pending]);
	const submit = useUnit(form.submit);

	const onSubmit = useSubmit(submit);

	return (
		<MainPopup
			isOpen={isOpen}
			onClose={onClose as VoidFunction}
			title='Введите ключевое слово'>
			<form className={cn(styles.form, className)} onSubmit={onSubmit}>
				<Keyword />
				<Button
					className={styles.button}
					type='submit'
					variant='contained'
					color='success'
					disabled={isSubmitting}
					disableElevation>
					Принять перевод
				</Button>
			</form>
		</MainPopup>
	);
};
const Keyword: React.FC = () => {
	const keyword = useUnit(form.fields.keyword);

	const helperText = keyword.isValid
		? 'Если вы введет ключевое слово неверно, то перевод будет отменен'
		: keyword.errorText;

	return (
		<PasswordField
			value={keyword.value}
			onChange={keyword.onChange}
			onBlur={keyword.onBlur}
			helperText={helperText}
			isValid={keyword.isValid}
			name='keyword'
			label='Ключевое слово'
			autoComplete='new-password'
			required
		/>
	);
};
