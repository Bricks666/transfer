import { useGate, useUnit } from 'effector-react';
import { requestsModel } from '../model';

export const useRequests = () => {
	useGate(requestsModel.RequestsGate);
	return useUnit(requestsModel.getAllQuery);
};
