import { Typography } from '@mui/material';
import * as React from 'react';
import { Header } from '@/widgets/header';
import { ProfileInfo } from '@/widgets/profile';
import { CommonProps } from '@/shared/types';
import { MainLayoutTemplate } from '@/shared/ui';

export interface ProfilePageProps extends CommonProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
	return (
		<MainLayoutTemplate header={<Header />}>
			<Typography variant='h4' align='center' component='h1'>
				Profile
			</Typography>
			<ProfileInfo />
		</MainLayoutTemplate>
	);
};

export default ProfilePage;
