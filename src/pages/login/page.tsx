import * as React from 'react';
import { Link } from 'atomic-router-react';
import { LoginForm } from '@/features/auth';
import { AuthLayout } from '@/shared/layouts';
import { CommonProps } from '@/shared/types';
import { routes } from '@/shared/configs';

export interface LoginPageProps extends CommonProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
	return (
		<AuthLayout>
			<h2>Login page</h2>
			<LoginForm />
			<Link to={routes.registration}>Registration</Link>
		</AuthLayout>
	);
};

export default LoginPage;
