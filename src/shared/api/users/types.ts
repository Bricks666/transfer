import { Address, Roles } from '@/shared/types';

export interface User {
	readonly login: Address;
	readonly role: Roles;
}
