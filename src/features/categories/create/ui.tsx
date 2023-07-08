import { Button, Paper } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { useSubmit } from '@/shared/lib';
import type { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { form, mutation } from './model';

import styles from './ui.module.css';

export const CreateCategoryForm: React.FC<CommonProps> = React.memo(
	function CreateCategoryForm(props) {
		const { className, } = props;
		const isSubmitting = useUnit(mutation.$pending);
		const submit = useUnit(form.submit);

		const onSubmit = useSubmit(submit);

		return (
			<Paper
				className={cn(styles.form, className)}
				onSubmit={onSubmit}
				variant='outlined'
				elevation={0}
				component='form'>
				<Name />
				<Button
					className={styles.button}
					type='submit'
					variant='contained'
					disabled={isSubmitting}
					disableElevation>
					Создать
				</Button>
			</Paper>
		);
	}
);

const Name: React.FC = () => {
	const name = useUnit(form.fields.name);
	return (
		<Field
			label='Название'
			value={name.value}
			onChange={name.onChange}
			onBlur={name.onBlur}
			helperText={name.errorText}
			isValid={name.isValid}
			name='name'
			placeholder='Название категории'
			required
		/>
	);
};
