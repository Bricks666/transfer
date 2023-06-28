import type { Address } from 'web3';

export interface Sample {
	readonly id: number;
	readonly name: string;
	readonly category_id: number;
	readonly money: number;
}
export interface CreateSampleParams extends Omit<Sample, 'id'> {
	readonly sender: Address;
}
