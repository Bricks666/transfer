import { createMutation } from '@farfetched/core';
import { createDomain } from 'effector-logger';
import { authModel } from '@/entities/auth';
import { CreateSampleParams, samplesApi } from '@/shared/api';

const createSampleDomain = createDomain();

export const addFx = createSampleDomain.effect<CreateSampleParams, unknown>();
addFx.use(samplesApi.create);

export const addMutation = createMutation({
	effect: authModel.attachWithSender(addFx),
});
