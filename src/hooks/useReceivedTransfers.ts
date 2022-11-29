import { useGate, useStoreMap, useUnit } from 'effector-react';
import { authModel, transfersModel } from '@/models';

export const useReceivedTransfers = () => {
	useGate(transfersModel.TransfersGate);
	const address = useUnit(authModel.$address);
	return useStoreMap({
		store: transfersModel.getAllQuery.$data,
		fn: (state, [login]) => {
			if (!login) {
				return undefined;
			}
			return state.filter((transfer) => transfer.sender === login);
		},
		keys: [address],
		defaultValue: [],
	});
};
