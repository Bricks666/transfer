import * as React from 'react';
import { MainLayout } from '@/layouts';
import { CommonProps } from '@/types';
import { RegistrationForm } from '@/components/RegistrationForm';
import { SaveLink } from '@/components/SaveLink';

export interface RegistrationPageProps extends CommonProps {}

const RegistrationPage: React.FC<RegistrationPageProps> = React.memo(
	function RegistrationPage() {
		return (
			<MainLayout>
				<h2>Registration Page</h2>
				<RegistrationForm />
				<SaveLink to='/login'>Login</SaveLink>
			</MainLayout>
		);
	}
);

export default RegistrationPage;
