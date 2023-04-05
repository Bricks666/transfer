import { createMutation } from '@farfetched/core';
import { createDomain } from 'effector';
import { attachWithSender } from '@/entities/auth';
import { transfersApi } from '@/shared/api';

const cancelTransfer = createDomain();

const handlerFx = cancelTransfer.effect(transfersApi.cancel);

export const mutation = createMutation({
	effect: attachWithSender(handlerFx),
});
