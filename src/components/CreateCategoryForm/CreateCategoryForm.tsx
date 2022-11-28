import * as React from 'react';
import { useMutation } from '@farfetched/react';
import { categoriesModel } from '@/models';
import { useForm } from '@/hooks';

export const CreateCategoryForm: React.FC = React.memo(
	function CreateCategoryForm() {
		const create = useMutation(categoriesModel.addMutation);
		const { onSubmit } = useForm(create.start);

		return (
			<form onSubmit={onSubmit}>
				<input
					name='name'
					placeholder='category name'
					minLength={6}
					maxLength={32}
					required
				/>
				<button type='submit'>Create category</button>
			</form>
		);
	}
);
