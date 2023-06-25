import { createMutation } from '@farfetched/core';
import { createDomain } from 'effector';
import { transfersApi } from '@/shared/api';
import { authModel } from '@/shared/models';

const cancelTransfer = createDomain();

const handlerFx = cancelTransfer.effect(transfersApi.cancel);

export const mutation = createMutation({
	effect: authModel.attachWithSender(handlerFx),
});
