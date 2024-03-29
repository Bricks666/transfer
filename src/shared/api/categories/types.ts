import type { Address } from 'web3';

export interface Category {
	readonly id: number;
	readonly name: string;
}

export interface CreateCategoryParams extends Pick<Category, 'name'> {
	readonly sender: Address;
}
