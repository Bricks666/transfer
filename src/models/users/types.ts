import { Address, Roles } from '@/types';

export interface User {
	readonly login: Address;
	readonly role: Roles;
}
