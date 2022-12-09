import { Button } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import { useForm } from 'effector-react-form';
import * as React from 'react';
import { CategoriesSelect } from '@/entities/categories';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { createSampleModel } from '../../model';

import styles from './CreateSamplesForm.module.css';

export const CreateSampleForm: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	const isSubmitting = useUnit(createSampleModel.addMutation.$pending);
	const { handleSubmit, controller, } = useForm({
		form: createSampleModel.form,
	});

	return (
		<form className={cn(styles.form, className)} onSubmit={handleSubmit}>
			<Field
				label='Name'
				controller={controller({
					name: createSampleModel.form.getNameStr('name'),
				})}
				placeholder='Sample name'
				required
			/>
			<CategoriesSelect
				label='Category'
				controller={controller({
					name: createSampleModel.form.getNameStr('category_id'),
				})}
				required
			/>
			<Field
				label='Money'
				controller={controller({
					name: createSampleModel.form.getNameStr('money'),
				})}
				placeholder='Money count'
				type='number'
				required
			/>
			<Button type='submit' disabled={isSubmitting}>
				Create sample
			</Button>
		</form>
	);
};
