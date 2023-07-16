import PollIcon from '@mui/icons-material/Poll';
import {
	Avatar,
	ListItem,
	ListItemAvatar,
	ListItemProps,
	ListItemText
} from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { Request } from '@/shared/api';
import { statusNames } from '@/shared/lib';
import { CommonProps, Slots, Status } from '@/shared/types';
import { AddressLabel } from '@/shared/ui';

import styles from './template-request-item.module.css';

export interface TemplateRequestItemProps
	extends CommonProps,
		Omit<Request, 'accept_voters' | 'cancel_voter' | 'id'>,
		Omit<ListItemProps, keyof Request | 'slots'> {
	readonly slots?: Slots<'actions' | 'extra'>;
}

export const TemplateRequestItem: React.FC<TemplateRequestItemProps> = (
	props
) => {
	const { candidate, status, className, slots = {}, ...rest } = props;

	const { actions, extra, } = slots;
	const primary = (
		<AddressLabel prefix='Кандидат: ' address={candidate} short />
	);

	const avatarClasses = cn({
		[styles.avatar__accept]: status === Status.accept,
		[styles.avatar__cancel]: status === Status.cancel,
		[styles.avatar__pending]: status === Status.pending,
	});

	return (
		<ListItem className={cn(styles.item, className)} {...rest}>
			<ListItemAvatar>
				<Avatar className={avatarClasses}>
					<PollIcon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText primary={primary} />
			<div className={styles.info}>
				<ListItemText>Статус: {statusNames[status]}</ListItemText>
			</div>
			{actions ? <div className={styles.actions}>{actions}</div> : null}
			{extra}
		</ListItem>
	);
};
