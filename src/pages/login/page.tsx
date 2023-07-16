import { Link as MUILink, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'atomic-router-react';
import * as React from 'react';
import { LoginForm } from '@/features/auth';
import { SITE_NAME, routes } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { AuthLayout } from '@/shared/ui';

import styles from './page.module.css';

export interface LoginPageProps extends CommonProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
	useTitle(`${SITE_NAME} - Вход`);

	return (
		<AuthLayout className={styles.layout}>
			<Typography className={styles.title} variant='h4' component='h1'>
				Добро пожаловать назад!
			</Typography>
			<Card className={styles.card} variant='outlined'>
				<CardContent className={styles.content}>
					<LoginForm />
					<Typography className={styles.link}>
						<span className={styles.question}>Еще нет аккаунта?</span>
						<br /> Тогда{' '}
						<MUILink to={routes.registration} component={Link}>
							создайте его
						</MUILink>{' '}
						прямо сейчас
					</Typography>
				</CardContent>
			</Card>
		</AuthLayout>
	);
};

export default LoginPage;
