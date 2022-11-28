import * as React from 'react';
import { AuthLayout } from '@/layouts';
import { CommonProps } from '@/types';
import { LoginForm } from '@/components/LoginForm';
import { SaveLink } from '@/components/SaveLink';

export interface LoginPageProps extends CommonProps {}

const LoginPage: React.FC<LoginPageProps> = React.memo(function LoginPage() {
	return (
		<AuthLayout>
			<h2>Login page</h2>
			<LoginForm />
			<SaveLink to='/registration'>Registration</SaveLink>
		</AuthLayout>
	);
});

export default LoginPage;
