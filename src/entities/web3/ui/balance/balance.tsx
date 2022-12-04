import * as React from 'react';
import { fromWei } from 'web3-utils';
import { useUnit } from 'effector-react';
import { $balance } from '../../model';

export const Balance: React.FC = React.memo(function Balance() {
	const balance = useUnit($balance);

	return <p>Balance: {fromWei(balance, 'ether')} ETH</p>;
});
