import * as React from 'react';
import { Link } from 'atomic-router-react';
import { AuthLayout } from '@/shared/layouts';
import { CommonProps } from '@/shared/types';
import { routingModel } from '@/shared/models';
import { RegistrationForm } from '@/shared/components/RegistrationForm';

export interface RegistrationPageProps extends CommonProps {}

const RegistrationPage: React.FC<RegistrationPageProps> = () => {
	return (
		<AuthLayout>
			<h2>Registration Page</h2>
			<RegistrationForm />
			<Link to={routingModel.loginRoute}>Login</Link>
		</AuthLayout>
	);
};

export default RegistrationPage;
