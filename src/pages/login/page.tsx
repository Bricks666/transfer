import { Link } from 'atomic-router-react';
import * as React from 'react';
import { LoginForm } from '@/features/auth';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import { AuthLayout } from '@/shared/ui';

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
