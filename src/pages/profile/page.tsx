import { CircularProgress, Typography } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { Header } from '@/widgets/page';
import { UserInfo } from '@/widgets/users';
import { usersModel } from '@/entities/users';
import { SITE_NAME } from '@/shared/configs';
import { shortAddress, useTitle } from '@/shared/lib';
import type { CommonProps } from '@/shared/types';
import { Center, MainLayout, PageTitle } from '@/shared/ui';
import { $currentProfile, $profile } from './model';

import styles from './page.module.css';

export interface ProfilePageProps extends CommonProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
	const address = useUnit($currentProfile);
	const preparedAddress = shortAddress(address);
	const title = `Профиль пользователя ${preparedAddress}`;

	useTitle(`${SITE_NAME} - ${title}`);

	return (
		<MainLayout header={<Header />}>
			<PageTitle title={title} />
			<Result />
		</MainLayout>
	);
};

const Result: React.FC = () => {
	const loading = useUnit(usersModel.query.$pending);
	const user = useUnit($profile);

	if (loading) {
		return (
			<Center>
				<CircularProgress size={60} />
			</Center>
		);
	}

	if (!user) {
		return (
			<Center>
				<Typography className={styles.empty_label} component='p'>
					Аккаунта с таким адресом не существует
				</Typography>
			</Center>
		);
	}

	return <UserInfo address={user.login} role={user.role} />;
};

export default ProfilePage;
