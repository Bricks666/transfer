import * as React from 'react';
import { useUnit } from 'effector-react';
import { authModel } from '@/models';

export const Balance: React.FC = React.memo(function Balance() {
	const balance = useUnit(authModel.$balance);

	return <p>Balance: {balance.toFixed(6)} ETH</p>;
});
