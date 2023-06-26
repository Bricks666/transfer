/* eslint-disable camelcase */
import { Button, Paper, Typography } from '@mui/material';
import cn from 'classnames';
import { useForm } from 'effector-forms';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { CategoriesSelect } from '@/entities/categories';
import { Web3AddressesSearch } from '@/entities/web3';
import { useSubmit } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { createTransferModel } from '../../model';

import styles from './create-transfer-form.module.css';

export interface CreateTransferFormProps extends CommonProps {}

export const CreateTransferForm: React.FC<CreateTransferFormProps> = React.memo(
	function CreateTransferForm(props) {
		const { className, } = props;
		const isSubmitting = useUnit(createTransferModel.mutation.$pending);
		const { submit, fields, } = useForm(createTransferModel.form);

		const { category_id, description, keyword, money, receiver, } = fields;
		const onSubmit = useSubmit(submit);
		/**
		 * TODO: Добавить менеджер форм и сделать заполнение по шаблону
		 */

		return (
			<Paper
				className={cn(styles.form, className)}
				onSubmit={onSubmit}
				variant='outlined'
				component='form'>
				<Typography className={styles.title} variant='h4' component='p'>
					Создание перевода
				</Typography>
				<Web3AddressesSearch
					value={receiver.value}
					onChange={receiver.onChange}
					onBlur={receiver.onBlur}
					helperText={receiver.errorText()}
					isValid={receiver.isValid}
					name={receiver.name}
					label='Получатель'
					required
				/>
				<CategoriesSelect
					value={category_id.value}
					onChange={category_id.onChange}
					onBlur={category_id.onBlur}
					helperText={category_id.errorText()}
					isValid={category_id.isValid}
					name={category_id.name}
					required
				/>
				<Field
					value={money.value}
					onChange={money.onChange}
					onBlur={money.onBlur}
					helperText={money.errorText()}
					isValid={money.isValid}
					name={money.name}
					label='Сумма перевода'
					type='number'
					required
				/>
				<Field
					value={keyword.value}
					onChange={keyword.onChange}
					onBlur={keyword.onBlur}
					helperText={keyword.errorText()}
					isValid={keyword.isValid}
					name={keyword.name}
					label='Пароль'
					type='password'
					required
				/>

				<Field
					className={styles.description}
					value={description.value}
					onChange={description.onChange}
					onBlur={description.onBlur}
					helperText={description.errorText()}
					isValid={description.isValid}
					name={description.name}
					label='Описание'
					minRows={2}
					multiline
				/>
				<Button
					className={styles.button}
					type='submit'
					variant='contained'
					disabled={isSubmitting}>
					Send
				</Button>
			</Paper>
		);
	}
);
