import { Button } from '@mui/material';
import { Link } from 'atomic-router-react';
import * as React from 'react';
import { routes } from '@/shared/configs';
import { Address, CommonProps } from '@/shared/types';

export interface ViewUserProfileProps extends CommonProps {
	readonly address: Address;
}

export const ViewUserProfile: React.FC<ViewUserProfileProps> = (props) => {
	const { className, address, } = props;
	return (
		<Button
			className={className}
			to={routes.profile as any}
			params={{ address, }}
			component={Link}>
			View user profile
		</Button>
	);
};
