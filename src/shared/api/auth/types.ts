import type { Address } from 'web3';
import type { Roles } from '@/shared/types';

export interface AuthParams {
	readonly address: Address;
	readonly password: string;
	readonly walletPassword: string;
}

export interface Auth {
	readonly login: Address;
	readonly role: Roles;
}

export interface LogoutParams {
	readonly sender: Address;
}
