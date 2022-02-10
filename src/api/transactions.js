import { contract } from ".";

export const getTransactionsApi = async () => {
	return await contract.methods.get_transfers().call();
};

export const sendTransactionApi = async (
	sender,
	receiver,
	value,
	keyword,
	description
) => {
	return await contract.methods
		.transferTo(receiver, keyword, description)
		.send({ from: sender, value });
};

export const acceptTransactionApi = async (sender, transactionId, keyword) => {
	return await contract.methods
		.acc_transfer(transactionId, keyword)
		.send({ from: sender });
};

export const cancelTransactionApi = async (sender, transactionId) => {
	return await contract.methods
		.cancel_transfer(transactionId)
		.send({ from: sender });
};
