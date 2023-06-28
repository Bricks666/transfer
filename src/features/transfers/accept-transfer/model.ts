import { createMutation, update } from '@farfetched/core';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { createPopupControlModel } from '@/entities/popups';
import { transfersModel } from '@/entities/transfers';
import { AcceptTransferParams, transfersApi } from '@/shared/api';
import { controls, getParams, popups } from '@/shared/configs';
import { authModel } from '@/shared/models';
import { Status } from '@/shared/types';

const acceptTransfer = createDomain();

const handlerFx = acceptTransfer.effect(transfersApi.accept);

export const $id = acceptTransfer.store<string | null>(null);
export const popup = createPopupControlModel(popups.acceptTransfer, {
	domain: acceptTransfer,
	controls: {
		open: acceptTransfer.event<string>(),
	},
});

export const mutation = createMutation({
	effect: authModel.attachWithSender(handlerFx),
});

export const form = createForm<Omit<AcceptTransferParams, 'sender' | 'id'>>({
	fields: {
		keyword: {
			init: '',
		},
	},
	domain: acceptTransfer,
});

sample({
	clock: mutation.finished.success,
	target: popup.close,
});

sample({
	clock: popup.close,
	target: form.reset,
});

sample({
	clock: popup.close,
	fn: () => null,
	target: $id,
});

sample({
	clock: form.formValidated,
	source: $id,
	filter: Boolean,
	fn: (id, { keyword, }) => ({ id: Number(id), keyword, }),
	target: mutation.start,
});

sample({
	clock: popup.open,
	target: $id,
});

/*
syncQuery не подходит, потому что там добавляется еще одна подписка на изменение query
Оно вызывается при изменение попапа и устанавливает значение для id в null, даже если было какое либо иное
*/
sample({
	clock: $id,
	source: controls.$query,
	fn: (query, id) => {
		if (!id) {
			if (query[getParams.transferId]) {
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const { [getParams.transferId]: _, ...rest } = query;
				return rest;
			}
			return query;
		}

		return {
			...query,
			[getParams.transferId]: id,
		};
	},
	target: controls.$query,
});

update(transfersModel.query, {
	on: mutation,
	by: {
		success: ({ query, mutation, }) => {
			if (!query) {
				return {
					result: [],
					refetch: true,
				};
			}

			if ('error' in query) {
				return {
					error: query.error,
					refetch: true,
				};
			}

			return {
				result: query.result.map((transfer) =>
					transfer.id === mutation.params.id
						? { ...transfer, status: Status.accept, }
						: transfer
				),
			};
		},
	},
});
