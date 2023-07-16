import { Tooltip, Typography, TypographyProps } from '@mui/material';
import * as React from 'react';
import type { Address } from 'web3';
import { shortAddress } from '@/shared/lib';
import type { CommonProps } from '@/shared/types';

import styles from './address-lable.module.css';

export interface AddressLabelProps extends CommonProps {
	readonly address: Address;
	readonly TypographyProps?: TypographyProps;
	readonly short?: boolean;
	readonly prefix?: React.ReactNode | null;
	readonly postfix?: React.ReactNode | null;
	readonly title?: React.ReactNode | null;
}

export const AddressLabel: React.FC<AddressLabelProps> = (props) => {
	const { className, address, short, title, postfix, prefix, TypographyProps, } =
		props;
	const preparedAddress = short ? shortAddress(address) : address;
	return (
		<Tooltip className={className} title={title ?? address}>
			<Typography className={styles.text} {...TypographyProps} component='span'>
				{prefix}
				{preparedAddress}
				{postfix}
			</Typography>
		</Tooltip>
	);
};
