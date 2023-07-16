import { Typography } from '@mui/material';
import * as React from 'react';
import { Center } from '../center';

import styles from './contract-error.module.css';

export const ContractError: React.FC = () => {
	return (
		<Center fullHeight>
			<Typography className={styles.title} variant='h5' component='h1'>
				Мы не можем получить адрес контракта
			</Typography>
			<Typography>Пожалуйста, подождите и повторите попытку</Typography>
		</Center>
	);
};
