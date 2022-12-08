import { useMutation } from '@farfetched/react';
import { Button } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { useForm } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { createCategoryModel } from '../../model';

import styles from './CreateCategoryForm.module.css';

export const CreateCategoryForm: React.FC<CommonProps> = React.memo(
	function CreateCategoryForm(props) {
		const { className, } = props;
		const create = useMutation(createCategoryModel.addMutation);
		const { onSubmit, } = useForm(create.start);

		return (
			<form className={cn(styles.form, className)} onSubmit={onSubmit}>
				<Field label='Name' name='name' placeholder='category name' required />
				<Button type='submit' variant='outlined' disabled={create.pending}>
					Create category
				</Button>
			</form>
		);
	}
);
