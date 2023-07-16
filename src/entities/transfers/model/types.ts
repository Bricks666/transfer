import type { Transfer } from '@/shared/api';
import type { ExtractValueType } from '@/shared/types';

export const TRANSFER_TYPE = {
	INCOMING: 'incoming',
	OUTGOING: 'outgoing',
} as const;

export type IdentifiedType = ExtractValueType<typeof TRANSFER_TYPE>;

export interface IdentifiedTransfer extends Transfer {
	readonly type: IdentifiedType;
}
