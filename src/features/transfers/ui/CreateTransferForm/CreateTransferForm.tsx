import { Button } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import { useForm } from 'effector-react-form';
import * as React from 'react';
import { CategoriesSelect } from '@/entities/categories';
import { AddressesSelect } from '@/entities/web3';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { createTransferModel } from '../../model';

import styles from './CreateTransferForm.module.css';

export interface CreateTransferFormProps extends CommonProps {}

export const CreateTransferForm: React.FC<CreateTransferFormProps> = React.memo(
	function CreateTransferForm(props) {
		const { className, } = props;
		const isSubmitting = useUnit(createTransferModel.addMutation.$pending);
		const { handleSubmit, controller, } = useForm({
			form: createTransferModel.form,
		});
		/**
		 * TODO: Добавить менеджер форм и сделать заполнение по шаблону
		 */

		return (
			<form className={cn(styles.form, className)} onSubmit={handleSubmit}>
				<AddressesSelect
					className={styles.addresses}
					controller={controller({
						name: createTransferModel.form.getNameStr('receiver'),
					})}
					label='Receiver'
					placeholder='receiver'
					required
				/>
				<Field
					controller={controller({
						name: createTransferModel.form.getNameStr('money'),
					})}
					label='Money'
					type='number'
					required
				/>
				<Field
					controller={controller({
						name: createTransferModel.form.getNameStr('keyword'),
					})}
					label='Keyword'
					type='password'
					placeholder='keyword'
					required
				/>
				<CategoriesSelect
					controller={controller({
						name: createTransferModel.form.getNameStr('category_id'),
					})}
					label='Category'
					placeholder='category'
					required
				/>
				<Field
					controller={controller({
						name: createTransferModel.form.getNameStr('description'),
					})}
					label='Description'
					placeholder='description'
					multiline
				/>
				<Button className={styles.button} type='submit' disabled={isSubmitting}>
					Send
				</Button>
			</form>
		);
	}
);
