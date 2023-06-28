import { Tooltip } from '@mui/material';
import * as React from 'react';
import type { Address } from 'web3';
import { shortAddress } from '@/shared/lib';
import type { CommonProps } from '@/shared/types';

export interface AddressLabelProps extends CommonProps {
	readonly address: Address;
	readonly prefix?: React.ReactNode | null;
	readonly postfix?: React.ReactNode | null;
	readonly title?: React.ReactNode | null;
}

export const AddressLabel: React.FC<AddressLabelProps> = (props) => {
	const { className, address, title, postfix, prefix, } = props;
	return (
		<Tooltip className={className} title={title ?? address}>
			<span>
				{prefix}
				{shortAddress(address)}
				{postfix}
			</span>
		</Tooltip>
	);
};
