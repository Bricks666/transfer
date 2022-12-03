import { attach, Effect, Store } from 'effector';
import { Address } from '@/shared/types';
import { $address } from './units';

export interface WithSender {
	readonly sender: Address;
}

export const attachWithSender = <Params extends WithSender, Done, Fail = Error>(
	effect: Effect<Params, Done, Fail>
) => {
	return attach<
		Omit<Params, keyof WithSender>,
		Store<Address | null>,
		Effect<Params, Done, Fail>
	>({
		source: $address,
		effect,
		mapParams: (params, address) =>
			({
				...params,
				sender: address ?? '',
			} as Params),
	});
};
