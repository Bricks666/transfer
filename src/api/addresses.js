import { web3 } from ".";

export const loadAddressesApi = async () => {
	return await web3.eth.getAccounts();
};
