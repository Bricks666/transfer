import * as React from 'react';
import { fromWei } from 'web3-utils';
import { useUnit } from 'effector-react';
import { authModel } from '@/models';

export const Balance: React.FC = React.memo(function Balance() {
	const balance = useUnit(authModel.$balance);

	return <p>Balance: {fromWei(balance, 'ether')} ETH</p>;
});
