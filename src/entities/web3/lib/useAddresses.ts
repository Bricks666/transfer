import { useQuery } from '@farfetched/react';
import { useGate } from 'effector-react';
import { addressesModel } from '../model';

export const useAddresses = () => {
	useGate(addressesModel.AddressesGate);
	return useQuery(addressesModel.getAllQuery);
};
