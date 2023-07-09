import { fromWei } from 'web3-utils';
import type { ExtractKeyType } from '../types';

export const ETHER_UNITS_MAP = {
	ether: 'ETH',
	finney: 'FIN',
	gwei: 'GWEI',
	kwei: 'KWEI',
	wei: 'WEI',
} as const;

export type UsingEtherUnits = ExtractKeyType<typeof ETHER_UNITS_MAP>;

export interface PrepareMoneyParams {
	readonly money: string | number | bigint;
	readonly precision?: number;
	readonly unit?: UsingEtherUnits;
}

export interface PrepareMoneyResult {
	readonly money: number;
	readonly unitName: string;
}

const DEFAULT_UNIT = 'ether';
const DEFAULT_PRECISION = 6;

export const prepareMoney = (
	params: PrepareMoneyParams
): PrepareMoneyResult => {
	const { money, precision = DEFAULT_PRECISION, unit = DEFAULT_UNIT, } = params;

	const castUnit = fromWei(BigInt(money), unit) as unknown as number;
	const castPrecision =
		Math.round(castUnit * 10 ** precision) / 10 ** precision;

	return {
		money: castPrecision,
		unitName: ETHER_UNITS_MAP[unit],
	};
};
