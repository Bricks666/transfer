import { Address, Roles } from '@/types';

export interface Auth {
	readonly login: Address;
	readonly role: Roles;
}
