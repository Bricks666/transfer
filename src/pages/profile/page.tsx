import { useUnit } from 'effector-react';
import * as React from 'react';
import { Header } from '@/widgets/page';
import { ProfileInfo } from '@/widgets/profile';
import { SITE_NAME } from '@/shared/configs';
import { shortAddress, useTitle } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { MainLayout, PageTitle } from '@/shared/ui';
import { $currentProfile } from './model';

export interface ProfilePageProps extends CommonProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
	const address = useUnit($currentProfile);
	const preparedAddress = shortAddress(address);
	const title = `Профиль пользователя ${preparedAddress}`;

	useTitle(`${SITE_NAME} - ${title}`);

	return (
		<MainLayout header={<Header />}>
			<PageTitle title={title} />
			<ProfileInfo />
		</MainLayout>
	);
};

export default ProfilePage;
