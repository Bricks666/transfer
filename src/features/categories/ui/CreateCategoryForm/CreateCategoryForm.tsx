import { Button } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import { useForm } from 'effector-react-form';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { createCategoryModel } from '../../model';

import styles from './CreateCategoryForm.module.css';

export const CreateCategoryForm: React.FC<CommonProps> = React.memo(
	function CreateCategoryForm(props) {
		const { className, } = props;
		const isSubmitting = useUnit(createCategoryModel.addMutation.$pending);
		const { handleSubmit, controller, } = useForm({
			form: createCategoryModel.form,
		});

		return (
			<form className={cn(styles.form, className)} onSubmit={handleSubmit}>
				<Field
					label='Name'
					controller={controller({
						name: createCategoryModel.form.getNameStr('name'),
					})}
					placeholder='category name'
					required
				/>
				<Button type='submit' variant='outlined' disabled={isSubmitting}>
					Create category
				</Button>
			</form>
		);
	}
);
