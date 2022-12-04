import { useGate, useUnit } from 'effector-react';
import { $balance, BalanceGate } from '../model';

export const useBalance = (address: string) => {
	useGate(BalanceGate, address);
	return useUnit($balance);
};
