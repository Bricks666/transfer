import { Button, Typography } from '@mui/material';
import { Link } from 'atomic-router-react';
import * as React from 'react';
import { LoginForm } from '@/features/auth';
import { SITE_NAME, routes } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { AuthLayout } from '@/shared/ui';

import { pageModel } from './models';
import styles from './page.module.css';

export interface LoginPageProps extends CommonProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
	useTitle(`${SITE_NAME} - Вход`);

	return (
		<AuthLayout className={styles.layout}>
			<Typography variant='h4' component='h1' align='center'>
				Login
			</Typography>
			<LoginForm />
			<Button className={styles.link} to={routes.registration} component={Link}>
				Registration
			</Button>
		</AuthLayout>
	);
};

pageModel.loaded();

export default LoginPage;
