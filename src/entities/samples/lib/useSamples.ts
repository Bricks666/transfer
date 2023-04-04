import { useGate, useUnit } from 'effector-react';
import { samplesModel } from '../model';

export const useSamples = () => {
	useGate(samplesModel.SamplesGate);
	return useUnit(samplesModel.getAllQuery);
};
