import { useMutation } from '@farfetched/react';
import { Button } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { CategoriesSelect } from '@/entities/categories';
import { useForm } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { createSampleModel } from '../../model';

import styles from './CreateSamplesForm.module.css';

export const CreateSampleForm: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	const create = useMutation(createSampleModel.addMutation);
	const { onSubmit, } = useForm(create.start);

	return (
		<form className={cn(styles.form, className)} onSubmit={onSubmit}>
			<Field label='Name' name='name' placeholder='Sample name' required />
			<CategoriesSelect name='category' required />
			<Field
				label='Money'
				name='money'
				placeholder='Money count'
				type='number'
				required
			/>
			<Button type='submit' disabled={create.pending}>
				Create sample
			</Button>
		</form>
	);
};
