import { Address } from '@/shared/types';

export interface CreateCategoryParams {
	readonly sender: Address;
	readonly name: string;
}
