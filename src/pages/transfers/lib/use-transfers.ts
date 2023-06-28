import { useStoreMap, useUnit } from 'effector-react';
import { transfersModel } from '@/entities/transfers';
import { authModel } from '@/shared/models';

export const useTransfers = () => {
	const user = useUnit(authModel.$user);
	const query = useUnit(transfersModel.query);
	console.log(user);

	const filteredTransfers = useStoreMap({
		store: transfersModel.query.$data,
		keys: [user?.address],
		fn: (transfers, [address]) => {
			if (!address) {
				return;
			}

			return transfers.filter(
				(transfer) =>
					transfer.sender === address || transfer.receiver === address
			);
		},
		defaultValue: [],
	});
	return { ...query, data: filteredTransfers, };
};
