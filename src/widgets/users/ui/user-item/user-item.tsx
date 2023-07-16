import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton, Menu } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { Address } from 'web3';
import { SetOnRequest, SetOnRequestItem } from '@/features/requests';
import { OpenUserProfile, OpenUserProfileItem } from '@/features/users';
import { TemplateUserItem, TemplateUserItemProps } from '@/entities/users';
import { useToggle } from '@/shared/lib';
import { deviceInfoModel } from '@/shared/models';
import { type CommonProps, Roles } from '@/shared/types';

export interface UserItemProps
	extends CommonProps,
		Omit<TemplateUserItemProps, 'actions'> {}

export const UserItem: React.FC<UserItemProps> = (props) => {
	const { login, role, } = props;

	const isMobile = useUnit(deviceInfoModel.$isMobile);

	const actionsProps: ActionsProps = {
		address: login,
		isAdmin: role === Roles.admin,
	};

	const actions = isMobile ? (
		<MobileActions {...actionsProps} />
	) : (
		<DesktopActions {...actionsProps} />
	);

	return <TemplateUserItem {...props} actions={actions} />;
};

interface ActionsProps {
	readonly address: Address;
	readonly isAdmin: boolean;
}

const DesktopActions: React.FC<ActionsProps> = (props) => {
	const { address, isAdmin, } = props;

	return (
		<>
			<OpenUserProfile address={address} />
			{!isAdmin ? <SetOnRequest candidate={address} /> : null}
		</>
	);
};

const MobileActions: React.FC<ActionsProps> = (props) => {
	const { address, isAdmin, } = props;
	const [opened, handlers] = useToggle();
	const [ref, setRef] = React.useState<HTMLButtonElement | null>(null);

	return (
		<>
			<IconButton onClick={handlers.toggle} ref={setRef}>
				<MoreHorizIcon />
			</IconButton>
			<Menu
				open={opened}
				onClose={handlers.toggleOff}
				anchorEl={ref}
				MenuListProps={{ disablePadding: true, }}>
				<OpenUserProfileItem address={address} />
				{!isAdmin ? <SetOnRequestItem candidate={address} /> : null}
			</Menu>
		</>
	);
};
