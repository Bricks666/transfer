import type { Address } from 'web3';
import { createContractRequest } from '../core';
import type { User } from './types';

export const getAll = createContractRequest(({ contract, }): Promise<User[]> => {
	return contract.methods.get_users().call();
});

export const getOne = createContractRequest<
	{ address: Address },
	Promise<User>
>(({ contract, address, }) => {
	return contract.methods.get_user(address).call();
});
