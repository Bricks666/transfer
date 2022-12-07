import * as React from 'react';
import { useMutation } from '@farfetched/react';
import { CategoriesSelect } from '@/entities/categories';
import { AddressesSelect } from '@/entities/web3';
import { CommonProps } from '@/shared/types';
import { useForm } from '@/shared/lib';
import { createTransferModel } from '../../model';

export interface CreateTransferFormProps extends CommonProps {}

export const CreateTransferForm: React.FC<CreateTransferFormProps> = React.memo(
	function CreateTransferForm() {
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
			<form onSubmit={onSubmit}>
				<AddressesSelect name='receiver' placeholder='receiver' required />
				<input name='money' type='number' min={0} required />
				<input name='keyword' placeholder='keyword' required />
				<CategoriesSelect name='category_id' placeholder='category' required />
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
				<textarea name='description' placeholder='description' />
				<button type='submit'>Send</button>
			</form>
		);
	}
);
