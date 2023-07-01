import { fromWei, type EtherUnits } from 'web3-utils';

const etherUnitsNamesMap: Record<EtherUnits, string> = {
	Gwei: 'GWEI',
	babbage: 'BAB',
	ether: 'ETH',
	femtoether: 'FETH',
	finney: 'FIN',
	gether: 'GETH',
	grand: 'GRN',
	gwei: 'GWEI',
	kether: 'KETH',
	Kwei: 'KWEI',
	kwei: 'KWEI',
	lovelace: 'LOV',
	mether: 'METH',
	micro: 'MIC',
	microether: 'mETH',
	milli: 'MIL',
	milliether: 'miETH',
	Mwei: 'MWEI',
	mwei: 'MWEI',
	nano: 'NANO',
	nanoether: 'NETH',
	noether: 'NoETH',
	picoether: 'PETH',
	shannon: 'SHN',
	szabo: 'SZA',
	tether: 'TETH',
	wei: 'WEI',
};

export interface PrepareMoneyParams {
	readonly money: string | number | bigint;
	readonly precision?: number;
	readonly unit?: EtherUnits;
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
		unitName: etherUnitsNamesMap[unit],
	};
};
