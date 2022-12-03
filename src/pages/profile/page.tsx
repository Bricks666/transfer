import * as React from 'react';
import { MainLayout } from '@/shared/layouts';
import { CommonProps } from '@/shared/types';
import { ProfileInfo } from '@/shared/components/ProfileInfo';

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
