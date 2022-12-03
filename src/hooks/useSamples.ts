import { useQuery } from '@farfetched/react';
import { useGate } from 'effector-react';
import { samplesModel } from '@/models';

export const useSamples = () => {
	useGate(samplesModel.SamplesGate);
	return useQuery(samplesModel.getAllQuery);
};
