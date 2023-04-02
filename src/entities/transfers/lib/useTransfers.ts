import { useQuery } from '@farfetched/react';
import { useGate, useUnit } from 'effector-react';
import { useMemo } from 'react';
import { authModel } from '@/entities/auth';
import { transfersModel } from '../model';

export const useTransfers = () => {
	useGate(transfersModel.TransfersGate);
	const address = useUnit(authModel.$address);
	const { data: transfers, ...state } = useQuery(transfersModel.getAllQuery);
	const filteredTransfers = useMemo(() => {
		return transfers.filter(
			(transfer) => transfer.sender === address || transfer.receiver === address
		);
	}, [address, transfers]);
	return { data: filteredTransfers, ...state, };
};