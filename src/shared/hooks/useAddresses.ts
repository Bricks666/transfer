import { useGate } from 'effector-react';
import { useQuery } from '@farfetched/react';
import { addressesModel } from '@/shared/models';

export const useAddresses = () => {
	useGate(addressesModel.AddressesGate);
	return useQuery(addressesModel.getAllQuery);
};
