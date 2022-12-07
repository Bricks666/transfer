import { Link } from 'atomic-router-react';
import * as React from 'react';
import { RegistrationForm } from '@/features/auth';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import { AuthLayout } from '@/shared/ui';

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
