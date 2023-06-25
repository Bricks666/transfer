import type { Address } from 'web3';

export interface Category {
	readonly id: string;
	readonly name: string;
}

export interface CreateCategoryParams extends Pick<Category, 'name'> {
	readonly sender: Address;
}
