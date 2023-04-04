import { useUnit } from 'effector-react';
import { useMemo } from 'react';
import { authModel } from '@/entities/auth';
import { transfersModel } from '@/entities/transfers';

export const useTransfers = () => {
	const address = useUnit(authModel.$address);
	const { data: transfers, ...state } = useUnit(transfersModel.query);
	const filteredTransfers = useMemo(() => {
		return transfers.filter(
			(transfer) => transfer.sender === address || transfer.receiver === address
		);
	}, [address, transfers]);
	return { data: filteredTransfers, ...state, };
};
