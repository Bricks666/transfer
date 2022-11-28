import * as React from 'react';
import { MainLayout } from '@/layouts';
import { CommonProps } from '@/types';
import { ProfileInfo } from '@/components/ProfileInfo';

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
