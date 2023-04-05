import { Button, Typography } from '@mui/material';
import { Link } from 'atomic-router-react';
import * as React from 'react';
import { RegistrationForm } from '@/features/auth';
import { SITE_NAME, routes } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { AuthLayout } from '@/shared/ui';

import { pageModel } from './models';
import styles from './page.module.css';

export interface RegistrationPageProps extends CommonProps {}

const RegistrationPage: React.FC<RegistrationPageProps> = () => {
	useTitle(`${SITE_NAME} - Регистрация`);

	return (
		<AuthLayout className={styles.layout}>
			<Typography variant='h4' component='h1' align='center'>
				Registration
			</Typography>
			<RegistrationForm />
			<Button className={styles.link} to={routes.login} component={Link}>
				Login
			</Button>
		</AuthLayout>
	);
};

pageModel.loaded();

export default RegistrationPage;
