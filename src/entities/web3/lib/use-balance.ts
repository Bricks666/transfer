import { useGate, useUnit } from 'effector-react';
import type { Address } from 'web3';
import { balanceModel } from '../model';

export const useBalance = (address: Address) => {
	useGate(balanceModel.BalanceGate, address);
	return useUnit(balanceModel.$balance);
};
