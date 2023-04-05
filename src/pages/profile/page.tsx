import { Typography } from '@mui/material';
import * as React from 'react';
import { Header } from '@/widgets/page';
import { ProfileInfo } from '@/widgets/profile';
import { SITE_NAME } from '@/shared/configs';
import { useTitle } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';

export interface ProfilePageProps extends CommonProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
	useTitle(`${SITE_NAME} - Профиль`);

	return (
		<MainLayout header={<Header />}>
			<Typography variant='h4' align='center' component='h1'>
				Profile
			</Typography>
			<ProfileInfo />
		</MainLayout>
	);
};

export default ProfilePage;
