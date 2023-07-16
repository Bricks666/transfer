import { querySync } from 'atomic-router';
import { createDomain, sample } from 'effector';
import { controls, getParams } from '@/shared/configs';

const popups = createDomain();

export const $popups = popups.store<string>('');

export const open = popups.event<string>();
export const close = popups.event<string>();

querySync({
	controls,
	source: {
		[getParams.popup]: $popups,
	},
});

sample({
	clock: close,
	source: $popups,
	fn: (popups, popup) => {
		return popups.replaceAll(popup, '');
	},
	target: $popups,
});

sample({
	clock: open,
	source: $popups,
	fn: (popups, popup) => {
		if (!popups) {
			return popup;
		}

		return `${popups},${popup}`;
	},
	target: $popups,
});
