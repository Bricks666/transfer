import { useGate, useStoreMap, useUnit } from 'effector-react';
import { authModel, transfersModel } from '@/models';

export const useSendedTransfers = () => {
	useGate(transfersModel.TransfersGate);
	const user = useUnit(authModel.$authUser);
	return useStoreMap({
		store: transfersModel.getAllQuery.$data,
		fn: (state, [login]) => {
			if (!login) {
				return undefined;
			}
			return state.filter((transfer) => transfer.sender === login);
		},
		keys: [user?.login],
		defaultValue: [],
	});
};
