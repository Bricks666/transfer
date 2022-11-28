import { useMutation } from '@farfetched/react';
import { useCategories, useForm } from '@/hooks';
import { samplesModel } from '@/models';

export const CreateSampleForm = () => {
	const { data: categories } = useCategories();
	const create = useMutation(samplesModel.addMutation);
	const { onSubmit } = useForm(create.start);

	return (
		<form onSubmit={onSubmit}>
			<input placeholder='Sample name' required />
			<select placeholder='Category' required>
				{categories!.map((category, i) => (
					<option value={i} key={i}>
						{category}
					</option>
				))}
			</select>
			<input placeholder='Money count' type='number' min={0} required />
			<button type='submit'>Create sample</button>
		</form>
	);
};
