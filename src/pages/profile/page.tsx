import * as React from 'react';
import { Header } from '@/widgets/header';
import { ProfileInfo } from '@/widgets/profile';
import { CommonProps } from '@/shared/types';
import { MainLayoutTemplate } from '@/shared/ui';

export interface ProfilePageProps extends CommonProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
	return (
		<MainLayoutTemplate header={<Header />}>
			<h2>Profile Page</h2>
			<ProfileInfo />
		</MainLayoutTemplate>
	);
};

export default ProfilePage;
