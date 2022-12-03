import { createMutation, createQuery } from '@farfetched/core';
import { createDomain } from 'effector-logger';
import { createGate } from 'effector-react';
import { attachWithSender } from '../auth';
import { CreateSampleParams, Sample } from './types';

const domain = createDomain();

export const getAllFx = domain.effect<void, Sample[]>();
export const addFx = domain.effect<CreateSampleParams, unknown>();

export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});

export const addMutation = createMutation({
	effect: attachWithSender(addFx),
});

export const SamplesGate = createGate({
	domain,
});
