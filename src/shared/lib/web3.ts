import dayjs from 'dayjs';
import type { Address } from 'web3';

export const removeHexBeginning = (address: Address): string => {
	return address.replace('0x', '');
};

export type ShortAddress = `${string}-${string}`;

export const shortAddress = (address: Address): ShortAddress => {
	const cutAddress = removeHexBeginning(address);
	const beginning = cutAddress.slice(0, 4);
	const ending = cutAddress.slice(cutAddress.length - 4, cutAddress.length);

	return `${beginning}-${ending}`;
};

export const toDatetimeString = (date: number): string => {
	return dayjs(date * 1000).format('HH:mm DD.MM.YYYY');
};
