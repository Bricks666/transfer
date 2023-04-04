import { useGate, useUnit } from 'effector-react';
import { usersModel } from '../model';

export const useUsers = () => {
	useGate(usersModel.UsersGate);
	return useUnit(usersModel.getAllQuery);
};
