import { Typography } from '@mui/material';
import * as React from 'react';
import { fromWei } from 'web3-utils';
import { Address, CommonProps } from '@/shared/types';
import { useBalance } from '../../lib';

export interface BalanceProps extends CommonProps {
	readonly address: Address;
}

export const Balance: React.FC<BalanceProps> = React.memo(function Balance(
	props
) {
	const { address, } = props;
	const balance = useBalance(address);

	return <Typography>Balance: {fromWei(balance, 'ether')} ETH</Typography>;
});
