import * as React from 'react';
import { Link } from 'atomic-router-react';
import { RegistrationForm } from '@/features/auth';
import { AuthLayout } from '@/shared/layouts';
import { CommonProps } from '@/shared/types';
import { routes } from '@/shared/configs';

export interface RegistrationPageProps extends CommonProps {}

const RegistrationPage: React.FC<RegistrationPageProps> = () => {
	return (
		<AuthLayout>
			<h2>Registration Page</h2>
			<RegistrationForm />
			<Link to={routes.login}>Login</Link>
		</AuthLayout>
	);
};

export default RegistrationPage;
