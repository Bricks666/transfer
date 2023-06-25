import type { Address } from 'web3';
import type { Status } from '@/shared/types';

export interface Request {
	readonly id: number;
	readonly candidate: Address;
	readonly accept_voter: Address[];
	readonly cancel_voter: Address;
	readonly status: Status;
}

export interface CreateRequestParams extends Pick<Request, 'candidate'> {
	readonly sender: Address;
}

export interface ChangeRequestParams extends Pick<Request, 'id'> {
	readonly sender: Address;
}
