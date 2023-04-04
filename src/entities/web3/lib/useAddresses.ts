import { useGate, useUnit } from 'effector-react';
import { addressesModel } from '../model';

export const useAddresses = () => {
	useGate(addressesModel.Gate);
	return useUnit(addressesModel.query);
};
