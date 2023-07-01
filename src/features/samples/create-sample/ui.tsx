import { Button, Paper } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { CategoriesPicker } from '@/entities/categories';
import { useSubmit } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { form, mutation } from './model';

import styles from './ui.module.css';

export const CreateSampleForm: React.FC<CommonProps> = (props) => {
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
			<Category />
			<Money />
			<Button
				className={styles.button}
				type='submit'
				variant='contained'
				disabled={isSubmitting}
				disableElevation>
				Добавить
			</Button>
		</Paper>
	);
};
const Name: React.FC = () => {
	const name = useUnit(form.fields.name);

	return (
		<Field
			value={name.value}
			onChange={name.onChange}
			onBlur={name.onBlur}
			helperText={name.errorText}
			isValid={name.isValid}
			name='name'
			label='Название шаблона'
			required
		/>
	);
};

const Category: React.FC = () => {
	const category = useUnit(form.fields.category_id);
	return (
		<CategoriesPicker
			value={category.value}
			onChange={category.onChange}
			onBlur={category.onBlur}
			helperText={category.errorText}
			isValid={category.isValid}
			name='category'
			label='Категория перевода'
			required
		/>
	);
};

const Money: React.FC = () => {
	const money = useUnit(form.fields.money);
	return (
		<Field
			value={money.value}
			onChange={money.onChange}
			onBlur={money.onBlur}
			helperText={money.errorText}
			isValid={money.isValid}
			label='Сумма'
			name='money'
			type='number'
			required
		/>
	);
};
