import { Effect, Store, attach } from 'effector';
import { Address } from '@/shared/types';
import { authModel } from '../model';

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
		source: authModel.$address,
		effect,
		mapParams: (params, address) =>
			({
				...params,
				sender: address ?? '',
			} as Params),
	});
};
