import type { Address } from 'web3';
import { createRequest } from '../core';
import type { User } from './types';

export const getAll = createRequest(({ contract, }): Promise<User[]> => {
	return contract.methods.get_users().call();
});

export const getOne = createRequest<{ address: Address }, Promise<User>>(
	({ contract, address, }) => {
		return contract.methods.get_user(address).call();
	}
);
