import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Paper, Tab } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import {
	CreateTransferBySampleForm,
	CreateTransferSimpleForm
} from '@/features/transfers';
import { CommonProps } from '@/shared/types';

import styles from './create-transfer.module.css';

export interface CreateTransferProps extends CommonProps {}

export const CreateTransfer: React.FC<CreateTransferProps> = (props) => {
	const { className, } = props;

	const [value, setValue] = React.useState(SIMPLE_FORM);

	const onChange = (_: unknown, tab: string) => {
		setValue(tab);
	};

	return (
		<Paper
			className={cn(styles.wrapper, className)}
			variant='outlined'
			elevation={0}>
			<TabContext value={value}>
				<TabList onChange={onChange} variant='fullWidth'>
					<Tab value={SIMPLE_FORM} label='Ручное создание' />
					<Tab value={SAMPLE_FORM} label='По шаблону' />
				</TabList>
				<TabPanel value={SIMPLE_FORM}>
					<CreateTransferSimpleForm className={styles.form} />
				</TabPanel>
				<TabPanel value={SAMPLE_FORM}>
					<CreateTransferBySampleForm className={styles.form} />
				</TabPanel>
			</TabContext>
		</Paper>
	);
};

const SIMPLE_FORM = 'simple';
const SAMPLE_FORM = 'sample';
