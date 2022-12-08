import { Address } from '@/shared/types';

export interface Sample {
	readonly id: string;
	readonly name: string;
	readonly category_id: string;
	readonly money: string;
}
export interface CreateSampleParams extends Omit<Sample, 'id'> {
	readonly sender: Address;
}
