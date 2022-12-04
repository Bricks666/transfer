import { createDomain } from 'effector-logger';
import { createGate } from 'effector-react';
import { createQuery, createMutation } from '@farfetched/core';
import { attachWithSender } from '@/entities/auth';
import { CreateRequestParams, ChangeRequestParams } from '@/shared/api';

const domain = createDomain();

export const getAllFx = domain.effect<void, Request[]>();
export const addFx = domain.effect<CreateRequestParams, void>();
export const acceptFx = domain.effect<ChangeRequestParams, void>();
export const cancelFx = domain.effect<ChangeRequestParams, void>();

export const getAllQuery = createQuery({
	effect: getAllFx,
	initialData: [],
});
export const addMutation = createMutation({
	effect: attachWithSender(addFx),
});
export const acceptMutation = createMutation({
	effect: attachWithSender(acceptFx),
});
export const cancelMutation = createMutation({
	effect: attachWithSender(cancelFx),
});

export const RequestsGate = createGate({
	domain,
});
