import * as React from 'react';
import { MainLayout } from '@/layouts';
import { ProfileInfo } from '@/components/ProfileInfo';
import { CommonProps } from '@/types';

export interface ProfilePageProps extends CommonProps {}

const ProfilePage: React.FC<ProfilePageProps> = React.memo(
	function ProfilePage() {
		return (
			<MainLayout>
				<h2>Profile Page</h2>
				<ProfileInfo />
			</MainLayout>
		);
	}
);

export default ProfilePage;
