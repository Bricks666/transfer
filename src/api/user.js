import { contract } from ".";

export const getUserApi = async (address) => {
	return await contract.methods.user(address).call();
};
