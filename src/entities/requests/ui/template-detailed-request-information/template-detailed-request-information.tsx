import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { hexToNumberString } from 'web3-utils';
import type { Request } from '@/shared/api';
import { statusNames } from '@/shared/lib';
import { deviceInfoModel } from '@/shared/models';
import type { CommonProps, Slots } from '@/shared/types';
import { AddressLabel } from '@/shared/ui';

import styles from './template-detailed-request-information.module.css';

export interface TemplateDetailedRequestInformationProps
	extends CommonProps,
		Omit<Request, 'id'> {
	readonly slots?: Slots<'actions'>;
}

export const TemplateDetailedRequestInformation: React.FC<TemplateDetailedRequestInformationProps> =
	React.memo(function TransferCard(props) {
		const {
			status,
			className,
			accept_voter: acceptVoter,
			cancel_voter: cancelVoter,
			candidate,
			slots = {},
		} = props;

		const { actions, } = slots;

		const [isMobile, isTableVertical] = useUnit([
			deviceInfoModel.$isMobile,
			deviceInfoModel.$isTabletVertical
		]);

		const shortAddress = isMobile || isTableVertical;

		const hasAcceptVoters = !!acceptVoter.length;
		const hasCancelVoter = hexToNumberString(cancelVoter) !== '0';

		const acceptVotersLabel = hasAcceptVoters ? (
			<>
				{acceptVoter.map((address) => (
					<AddressLabel
						className={styles.address}
						address={address}
						short={shortAddress}
						key={address}
					/>
				))}
			</>
		) : (
			'Никто не голосовал'
		);

		const cancelVoterLabel = hasCancelVoter ? (
			<AddressLabel
				className={styles.address}
				address={cancelVoter}
				short={shortAddress}
			/>
		) : (
			'Никто не голосовал'
		);

		return (
			<Card
				className={className}
				variant='outlined'
				elevation={0}
				component='article'
				square>
				<CardContent className={styles.content}>
					<AddressLabel
						className={styles.row}
						prefix={<span className={styles.item}>Кандидат: </span>}
						address={candidate}
						short={shortAddress}
					/>
					<Typography className={styles.row}>
						<span className={styles.item}>За:</span> {acceptVotersLabel}
					</Typography>
					<Typography className={styles.row}>
						<span className={styles.item}>Против:</span> {cancelVoterLabel}
					</Typography>
					<Typography className={styles.row}>
						<span className={styles.item}>Статус:</span> {statusNames[status]}
					</Typography>
				</CardContent>
				{actions ? (
					<CardActions className={styles.actions}>{actions}</CardActions>
				) : null}
			</Card>
		);
	});
