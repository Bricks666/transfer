import { useMutation } from '@farfetched/react';
import { Button } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { CategoriesSelect } from '@/entities/categories';
import { AddressesSelect } from '@/entities/web3';
import { useForm } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { createTransferModel } from '../../model';

import styles from './CreateTransferForm.module.css';

export interface CreateTransferFormProps extends CommonProps {}

export const CreateTransferForm: React.FC<CreateTransferFormProps> = React.memo(
	function CreateTransferForm(props) {
		const { className, } = props;
		const create = useMutation(createTransferModel.addMutation);
		const { onSubmit, } = useForm(create.start);
		/* const samples = useSamples(); */

		/**
		 * TODO: Добавить менеджер форм и сделать заполнение по шаблону
		 */
		/*
	const onSampleSelect = useCallback(
		(evt) => {
			const value = JSON.parse(evt.target.value);
			if (!value) {
				reset();
				return;
			}
			const { categoryId, moneyCount } = samples[value];
			setCategory({ target: { value: categoryId } });
			setValue({ target: { value: moneyCount } });
			setSample(evt);
		},
		[reset, setSample, setValue, setCategory, samples]
	); */

		return (
			<form className={cn(styles.form, className)} onSubmit={onSubmit}>
				<AddressesSelect
					className={styles.addresses}
					name='receiver'
					label='Receiver'
					placeholder='receiver'
					required
				/>
				<Field name='money' label='Money' type='number' required />
				<Field name='keyword' label='Keyword' placeholder='keyword' required />
				<CategoriesSelect
					name='category_id'
					label='Category'
					placeholder='category'
					required
				/>
				{/* 			<select placeholder='samples' value={sample} onChange={onSampleSelect}>
				<option value={0} />
				{samples.map(({ name }, i) => {
					return (
						<option value={i} key={i}>
							{name}
						</option>
					);
				})}
			</select> */}
				<Field
					name='description'
					label='Description'
					placeholder='description'
					multiline
				/>
				<Button
					className={styles.button}
					type='submit'
					disabled={create.pending}>
					Send
				</Button>
			</form>
		);
	}
);
