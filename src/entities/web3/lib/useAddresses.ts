import { useGate } from 'effector-react';
import { useQuery } from '@farfetched/react';
import { AddressesGate, getAllQuery } from '../model';

export const useAddresses = () => {
	useGate(AddressesGate);
	return useQuery(getAllQuery);
};
