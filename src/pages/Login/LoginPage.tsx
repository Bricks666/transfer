import * as React from 'react';
import { Link } from 'atomic-router-react';
import { AuthLayout } from '@/layouts';
import { CommonProps } from '@/types';
import { routingModel } from '@/models';
import { LoginForm } from '@/components/LoginForm';

export interface LoginPageProps extends CommonProps {}

const LoginPage: React.FC<LoginPageProps> = React.memo(function LoginPage() {
	return (
		<AuthLayout>
			<h2>Login page</h2>
			<LoginForm />
			<Link to={routingModel.registrationRoute}>Registration</Link>
		</AuthLayout>
	);
});

export default LoginPage;
