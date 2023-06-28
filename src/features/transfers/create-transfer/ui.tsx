import { Button, Paper } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { CategoriesPicker } from '@/entities/categories';
import { Web3AddressesSearch } from '@/entities/web3';
import { useSubmit } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Field, PasswordField } from '@/shared/ui';
import { form, mutation } from './model';

import styles from './ui.module.css';

export interface CreateTransferFormProps extends CommonProps {}

export const CreateTransferForm: React.FC<CreateTransferFormProps> = React.memo(
	function CreateTransferForm(props) {
		const { className, } = props;
		const isSubmitting = useUnit(mutation.$pending);
		const submit = useUnit(form.submit);

		const onSubmit = useSubmit(submit);
		/**
		 * TODO: Добавить менеджер форм и сделать заполнение по шаблону
		 */

		return (
			<Paper
				className={cn(styles.form, className)}
				onSubmit={onSubmit}
				variant='outlined'
				elevation={0}
				component='form'>
				<Receiver />
				<Category />
				<Money />
				<Keyword />
				<Description />
				<Button
					className={styles.button}
					type='submit'
					variant='contained'
					disabled={isSubmitting}
					disableElevation>
					Отправить
				</Button>
			</Paper>
		);
	}
);

const Receiver: React.FC = () => {
	const receiver = useUnit(form.fields.receiver);
	return (
		<Web3AddressesSearch
			value={receiver.value}
			onChange={receiver.onChange}
			onBlur={receiver.onBlur}
			helperText={receiver.errorText}
			isValid={receiver.isValid}
			name='receiver'
			label='Получатель'
			required
		/>
	);
};

const Category: React.FC = () => {
	const category = useUnit(form.fields.category_id);

	return (
		<CategoriesPicker
			value={category.value}
			onChange={category.onChange}
			onBlur={category.onBlur}
			helperText={category.errorText}
			isValid={category.isValid}
			name='Category'
			label='Категория перевода'
			required
		/>
	);
};

const Money: React.FC = () => {
	const money = useUnit(form.fields.money);
	return (
		<Field
			value={money.value}
			onChange={money.onChange}
			onBlur={money.onBlur}
			helperText={money.errorText}
			isValid={money.isValid}
			name='Money'
			label='Сумма перевода'
			type='number'
			required
		/>
	);
};

const Keyword: React.FC = () => {
	const keyword = useUnit(form.fields.keyword);

	return (
		<PasswordField
			value={keyword.value}
			onChange={keyword.onChange}
			onBlur={keyword.onBlur}
			helperText={keyword.errorText}
			isValid={keyword.isValid}
			name='keyword'
			label='Ключевое слово'
			required
		/>
	);
};

const Description: React.FC = () => {
	const description = useUnit(form.fields.description);

	return (
		<Field
			className={styles.description}
			value={description.value}
			onChange={description.onChange}
			onBlur={description.onBlur}
			helperText={description.errorText}
			isValid={description.isValid}
			name='description'
			label='Описание'
			minRows={2}
			multiline
		/>
	);
};
