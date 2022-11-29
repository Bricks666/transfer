import { User } from '@/models';
import { Address } from '@/types';
import { contract } from './core';

export const getAll = (): Promise<User[]> => {
	return contract.methods.get_users().call();
};

export const getOne = (address: Address): Promise<User> => {
	return contract.methods.get_user(address).call();
};
