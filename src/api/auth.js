import { contract, web3 } from '.';

export const registrationApi = async (address) => {
	return await contract.methods.reg_user().send({ from: address });
};

export const loginApi = async (address) => {
	return await contract.methods.login_user().call({ from: address });
};

export const getBalanceApi = async (address) => {
	return await web3.eth.getBalance(address);
};
