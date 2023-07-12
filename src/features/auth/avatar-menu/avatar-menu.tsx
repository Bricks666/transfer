import { Menu, MenuItem } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import type { CommonProps, VoidFunction } from '@/shared/types';
import { mutation } from './model';

export interface AvatarMenuProps extends CommonProps {
	readonly anchorEl: HTMLElement | null;
	readonly opened: boolean;
	readonly onClose: VoidFunction;
	readonly id?: string;
}

export const AvatarMenu: React.FC<AvatarMenuProps> = (props) => {
	const { className, anchorEl, opened, onClose, id, } = props;

	const logout = useUnit(mutation);

	return (
		<Menu
			id={id}
			className={className}
			open={opened}
			onClose={onClose}
			anchorEl={anchorEl}
			anchorOrigin={{ horizontal: 'right', vertical: 'bottom', }}
			transformOrigin={{ horizontal: 'right', vertical: 'top', }}>
			<MenuItem onClick={logout.start}>Выйти</MenuItem>
		</Menu>
	);
};
