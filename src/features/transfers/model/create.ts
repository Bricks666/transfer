import { createMutation } from '@farfetched/core';
import { createDomain } from 'effector-logger';
import { authModel } from '@/entities/auth';
import { CreateTransferParams, transfersApi } from '@/shared/api';

const createTransferDomain = createDomain();

export const addFx = createTransferDomain.effect<
	CreateTransferParams,
	unknown
>();
addFx.use(transfersApi.create);

export const addMutation = createMutation({
	effect: authModel.attachWithSender(addFx),
});
