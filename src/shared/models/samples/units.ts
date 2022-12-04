import { createDomain } from 'effector-logger';
import { createGate } from 'effector-react';
import { createMutation, createQuery } from '@farfetched/core';
import { attachWithSender } from '@/entities/auth';
import { Sample, CreateSampleParams } from '@/shared/api';

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
