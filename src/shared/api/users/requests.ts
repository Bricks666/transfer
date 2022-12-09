import { Address } from '@/shared/types';
import { contract } from '../core';
import { User } from './types';

export const getAll = (): Promise<User[]> => {
	return contract.methods.get_users().call();
};

export const getOne = (address: Address): Promise<User> => {
	return contract.methods.get_user(address).call();
};
