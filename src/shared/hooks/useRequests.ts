import { useQuery } from '@farfetched/react';
import { useGate } from 'effector-react';
import { requestsModel } from '@/shared/models';

export const useRequests = () => {
	useGate(requestsModel.RequestsGate);
	return useQuery(requestsModel.getAllQuery);
};
