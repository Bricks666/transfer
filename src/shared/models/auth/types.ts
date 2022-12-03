import { Address, Roles } from '@/shared/types';

export interface Auth {
	readonly login: Address;
	readonly role: Roles;
}
