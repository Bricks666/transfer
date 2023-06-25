import { Button } from '@mui/material';
import cn from 'classnames';
import { useForm } from 'effector-forms';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { useSubmit } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { createCategoryModel } from '../../model';

import styles from './CreateCategoryForm.module.css';

export const CreateCategoryForm: React.FC<CommonProps> = React.memo(
	function CreateCategoryForm(props) {
		const { className, } = props;
		const isSubmitting = useUnit(createCategoryModel.mutation.$pending);
		const { fields, submit, } = useForm(createCategoryModel.form);

		const { name, } = fields;
		const onSubmit = useSubmit(submit);

		return (
			<form className={cn(styles.form, className)} onSubmit={onSubmit}>
				<Field
					label='Name'
					value={name.value}
					onChange={name.onChange}
					onBlur={name.onBlur}
					helperText={name.errorText()}
					isValid={name.isValid}
					name={name.name}
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
