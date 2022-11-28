import { createQuery, createMutation } from '@farfetched/core';
import { createDomain } from 'effector-logger';
import { createGate } from 'effector-react';
import { attachWithSender } from '../auth';
import {
	AcceptTransferParams,
	CancelTransferParams,
	CreateTransferParams,
	Transfer,
} from './types';

const domain = createDomain();

export const getAllFx = domain.effect<unknown, Transfer[]>();
export const addFx = domain.effect<CreateTransferParams, unknown>();
export const acceptFx = domain.effect<AcceptTransferParams, unknown>();
export const cancelFx = domain.effect<CancelTransferParams, unknown>();

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

export const TransfersGate = createGate({
	domain,
});
