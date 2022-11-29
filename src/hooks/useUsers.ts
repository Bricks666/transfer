import { useQuery } from '@farfetched/react';
import { useGate } from 'effector-react';
import { usersModel } from '@/models';

export const useUsers = () => {
	useGate(usersModel.UsersGate);
	return useQuery(usersModel.getAllQuery);
};
