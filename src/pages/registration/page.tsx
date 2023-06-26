import { Link as MUILink, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'atomic-router-react';
import * as React from 'react';
import { RegistrationForm } from '@/features/auth';
import { SITE_NAME, routes } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { AuthLayout } from '@/shared/ui';

import styles from './page.module.css';

export interface RegistrationPageProps extends CommonProps {}

const RegistrationPage: React.FC<RegistrationPageProps> = () => {
	useTitle(`${SITE_NAME} - Регистрация`);

	return (
		<AuthLayout className={styles.layout}>
			<Typography className={styles.title} variant='h4' component='h1'>
				Создайте новый аккаунт!
			</Typography>
			<Card className={styles.card} variant='outlined'>
				<CardContent className={styles.content}>
					<RegistrationForm />
					<Typography className={styles.link}>
						<span className={styles.question}>Уже есть аккаунт?</span>
						<br /> Тогда{' '}
						<MUILink to={routes.login} component={Link}>
							войдите в него
						</MUILink>{' '}
						прямо сейчас
					</Typography>
				</CardContent>
			</Card>
		</AuthLayout>
	);
};

export default RegistrationPage;
