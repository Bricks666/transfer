import type { Address } from 'web3';
import type { Status } from '@/shared/types';

export interface Transfer {
	readonly id: number;
	readonly sender: Address;
	readonly receiver: Address;
	readonly category_id: number;
	readonly money: number;
	readonly description: string;
	readonly keyword: string;
	readonly status: Status;
	readonly sended_at: number;
	readonly finished_at: number;
}

export interface CreateTransferParams
	extends Pick<
		Transfer,
		'sender' | 'receiver' | 'category_id' | 'keyword' | 'description' | 'money'
	> {}

export interface AcceptTransferParams
	extends Pick<Transfer, 'sender' | 'id' | 'keyword'> {}

export interface CancelTransferParams extends Pick<Transfer, 'sender' | 'id'> {}
