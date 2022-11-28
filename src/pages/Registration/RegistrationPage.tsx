import * as React from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { CommonProps } from '@/types';
import { RegistrationForm } from '@/components/RegistrationForm';

export interface RegistrationPageProps extends CommonProps {}

const RegistrationPage: React.FC<RegistrationPageProps> = React.memo(
	function RegistrationPage() {
		return (
			<MainLayout>
				<h2>Registration Page</h2>
				<RegistrationForm />
				<Link to='/login'>Login</Link>
			</MainLayout>
		);
	}
);

export default RegistrationPage;
