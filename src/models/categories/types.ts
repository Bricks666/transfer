import { Address } from '@/types';

export interface CreateCategoryParams {
	readonly sender: Address;
	readonly name: string;
}
