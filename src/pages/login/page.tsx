import * as React from 'react';
import { Link } from 'atomic-router-react';
import { AuthLayout } from '@/shared/layouts';
import { CommonProps } from '@/shared/types';
import { routingModel } from '@/shared/models';
import { LoginForm } from '@/shared/components/LoginForm';

export interface LoginPageProps extends CommonProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
	return (
		<AuthLayout>
			<h2>Login page</h2>
			<LoginForm />
			<Link to={routingModel.registrationRoute}>Registration</Link>
		</AuthLayout>
	);
};

export default LoginPage;
