import * as React from 'react';
import { useMutation } from '@farfetched/react';
import { CategoriesSelect } from '@/entities/categories';
import { useForm } from '@/shared/lib';
import { createSampleModel } from '../../model';

export const CreateSampleForm: React.FC = () => {
	const create = useMutation(createSampleModel.addMutation);
	const { onSubmit, } = useForm(create.start);

	return (
		<form onSubmit={onSubmit}>
			<input name='name' placeholder='Sample name' required />
			<CategoriesSelect name='category' required />
			<input
				name='money'
				placeholder='Money count'
				type='number'
				min={0}
				required
			/>
			<button type='submit'>Create sample</button>
		</form>
	);
};
