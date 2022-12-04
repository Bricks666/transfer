import * as React from 'react';
import { useMutation } from '@farfetched/react';
import {
	useAddresses,
	useCategories,
	useForm
	/* useSamples, */
} from '@/shared/hooks';
import { CommonProps } from '@/shared/types';
import { transfersModel } from '@/shared/models';

export interface CreateTransferFormProps extends CommonProps {}

export const CreateTransferForm: React.FC<CreateTransferFormProps> = React.memo(
	function CreateTransferForm() {
		const { data: addresses, } = useAddresses();
		const { data: categories, } = useCategories();
		const create = useMutation(transfersModel.addMutation);
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
				<select name='receiver' placeholder='receiver' required>
					{addresses.map((address) => (
						<option value={address} key={address}>
							{address}
						</option>
					))}
				</select>
				<input name='money' type='number' min={0} required />
				<input name='keyword' placeholder='keyword' required />
				<select name='category_id' placeholder='category' required>
					{categories!.map((category, index) => (
						<option value={index} key={index}>
							{category}
						</option>
					))}
				</select>
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
