import * as React from 'react';
import { Link } from 'atomic-router-react';
import { AuthLayout } from '@/layouts';
import { CommonProps } from '@/types';
import { routingModel } from '@/models';
import { RegistrationForm } from '@/components/RegistrationForm';

export interface RegistrationPageProps extends CommonProps {}

const RegistrationPage: React.FC<RegistrationPageProps> = React.memo(
	function RegistrationPage() {
		return (
			<AuthLayout>
				<h2>Registration Page</h2>
				<RegistrationForm />
				<Link to={routingModel.loginRoute}>Login</Link>
			</AuthLayout>
		);
	}
);

export default RegistrationPage;
