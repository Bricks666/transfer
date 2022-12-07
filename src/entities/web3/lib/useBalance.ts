import { useGate, useUnit } from 'effector-react';
import { balanceModel } from '../model';

export const useBalance = (address: string) => {
	useGate(balanceModel.BalanceGate, address);
	return useUnit(balanceModel.$balance);
};
