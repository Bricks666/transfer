import { Address, Roles } from '@/shared/types';

export interface AuthParams {
	readonly address: Address;
	readonly password: string;
}

export interface Auth {
	readonly login: Address;
	readonly role: Roles;
}
