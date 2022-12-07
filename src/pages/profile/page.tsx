import * as React from 'react';
import { ProfileInfo } from '@/widgets/profile';
import { MainLayout } from '@/shared/layouts';
import { CommonProps } from '@/shared/types';

export interface ProfilePageProps extends CommonProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
	return (
		<MainLayout>
			<h2>Profile Page</h2>
			<ProfileInfo />
		</MainLayout>
	);
};

export default ProfilePage;
