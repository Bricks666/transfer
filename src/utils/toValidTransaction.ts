export const toValidTransaction = (transaction) => {
	return {
		id: transaction.transfer_num,
		sender: transaction.owner_address,
		receiver: transaction.recipient_address,
		count: transaction.count,
		status: transaction.status,
		description: transaction.description,
		categoryId: transaction.id_category,
	};
};
