/* eslint-disable camelcase */
import { Button } from '@mui/material';
import cn from 'classnames';
import { useForm } from 'effector-forms';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { CategoriesSelect } from '@/entities/categories';
import { useSubmit } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { createSampleModel } from '../../model';

import styles from './CreateSamplesForm.module.css';

export const CreateSampleForm: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	const isSubmitting = useUnit(createSampleModel.mutation.$pending);
	const { submit, fields, } = useForm(createSampleModel.form);

	const { category_id, money, name, } = fields;
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
				placeholder='Sample name'
				required
			/>
			<CategoriesSelect
				label='Category'
				value={category_id.value}
				onChange={category_id.onChange}
				onBlur={category_id.onBlur}
				helperText={category_id.errorText()}
				isValid={category_id.isValid}
				name={category_id.name}
				required
			/>
			<Field
				label='Money'
				value={money.value}
				onChange={money.onChange}
				onBlur={money.onBlur}
				helperText={money.errorText()}
				isValid={money.isValid}
				name={money.name}
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
