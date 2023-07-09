import { Button, Paper, Typography } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { CategoriesPicker } from '@/entities/categories';
import { SamplesPicker } from '@/entities/samples';
import { UsersPicker } from '@/entities/users';
import { MoneyField } from '@/entities/web3';
import { useSubmit } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Field, Form, PasswordField } from '@/shared/ui';
import { $selectedSample, form, mutation } from './model';

import styles from './ui.module.css';

export interface CreateTransferBySampleFormProps extends CommonProps {}

export const CreateTransferBySampleForm: React.FC<CreateTransferBySampleFormProps> =
	React.memo(function CreateTransferForm(props) {
		const { className, } = props;
		const isSubmitting = useUnit(mutation.$pending);
		const submit = useUnit(form.submit);

		const onSubmit = useSubmit(submit);

		return (
			<Form
				className={cn(styles.form, className)}
				onSubmit={onSubmit}
				autoComplete='off'>
				<Sample />
				<SelectedSampleInfo />
				<Receiver />
				<Keyword />
				<Description />
				<Button
					className={styles.button}
					type='submit'
					variant='contained'
					disabled={isSubmitting}
					disableElevation>
					Отправить
				</Button>
			</Form>
		);
	});

const Receiver: React.FC = () => {
	const receiver = useUnit(form.fields.receiver);
	return (
		<UsersPicker
			value={receiver.value}
			onChange={receiver.onChange}
			onBlur={receiver.onBlur}
			helperText={receiver.errorText}
			isValid={receiver.isValid}
			name='receiver'
			label='Получатель'
			InputProps={{ autoComplete: 'off', }}
			required
		/>
	);
};

const Sample: React.FC = () => {
	const sample = useUnit(form.fields.sample_id);

	return (
		<SamplesPicker
			className={styles.sample}
			value={sample.value}
			onChange={sample.onChange}
			onBlur={sample.onBlur}
			helperText={sample.errorText}
			isValid={sample.isValid}
			name='sample'
			label='Шаблон'
			InputProps={{ autoComplete: 'off', }}
			required
		/>
	);
};

const SelectedSampleInfo: React.FC = () => {
	const sample = useUnit($selectedSample);

	if (!sample) {
		return null;
	}

	return (
		<Paper
			className={styles.selected}
			variant='outlined'
			elevation={0}
			component='legend'>
			<Typography
				className={styles.legend}
				variant='subtitle2'
				component='legend'>
				Данное поле взято из шаблона и не может быть изменено
			</Typography>
			<CategoriesPicker
				value={sample.id}
				InputProps={{ readOnly: true, }}
				focused={false}
				readOnly
				label='Категория перевода'
				isValid
			/>
			<MoneyField value={sample.money} label='Сумма перевода' isValid />
		</Paper>
	);
};

const Keyword: React.FC = () => {
	const keyword = useUnit(form.fields.keyword);

	return (
		<PasswordField
			value={keyword.value}
			onChange={keyword.onChange}
			onBlur={keyword.onBlur}
			helperText={keyword.errorText}
			isValid={keyword.isValid}
			name='keyword'
			label='Ключевое слово'
			autoComplete='new-password'
			required
		/>
	);
};

const Description: React.FC = () => {
	const description = useUnit(form.fields.description);

	return (
		<Field
			className={styles.description}
			value={description.value}
			onChange={description.onChange}
			onBlur={description.onBlur}
			helperText={description.errorText}
			isValid={description.isValid}
			name='description'
			label='Описание'
			minRows={2}
			autoComplete='off'
			multiline
		/>
	);
};
