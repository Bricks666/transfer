import { contract } from '.';

export const getTransactionsApi = async () => {
	return contract.methods.get_transfers().call();
};

export const sendTransactionApi = async (
	sender,
	receiver,
	value,
	keyword,
	description,
	category
) => {
	return contract.methods
		.transferTo(receiver, keyword, description, category)
		.send({ from: sender, value: value * 10 ** 18 });
};

export const getTransaction = async (id) => {
	return contract.methods.money_transfer;
};

export const acceptTransactionApi = async (sender, transactionId, keyword) => {
	return contract.methods
		.acc_transfer(transactionId, keyword)
		.send({ from: sender });
};

export const cancelTransactionApi = async (sender, transactionId) => {
	return contract.methods.cancel_transfer(transactionId).send({ from: sender });
};
