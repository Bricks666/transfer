import { Address } from '@/types';

export enum Roles {
	user,
	admin,
}

export interface Auth {
	readonly login: Address;
	readonly role: Roles;
}
