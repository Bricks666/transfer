import { contract } from '.';

export const getUserApi = async (address) => {
	return contract.methods.user(address).call();
};
