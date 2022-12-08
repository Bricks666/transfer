import { Address, Status } from '@/shared/types';

export interface Transfer {
	readonly id: string;
	readonly sender: Address;
	readonly receiver: Address;
	readonly category_id: string;
	readonly money: string;
	readonly description: string;
	readonly keyword: string;
	readonly status: Status;
	readonly sended_at: string;
	readonly finished_at: string;
}

export interface CreateTransferParams
	extends Pick<
		Transfer,
		'sender' | 'receiver' | 'category_id' | 'keyword' | 'description' | 'money'
	> {}

export interface AcceptTransferParams
	extends Pick<Transfer, 'sender' | 'id' | 'keyword'> {}

export interface CancelTransferParams extends Pick<Transfer, 'sender' | 'id'> {}
