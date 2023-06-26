import type { Address } from 'web3';
import type { Roles } from '@/shared/types';

export interface User {
	readonly login: Address;
	readonly role: Roles;
}
