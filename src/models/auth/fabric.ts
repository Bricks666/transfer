import { attach, Effect, Store } from 'effector';
import { Address } from '@/types';
import { $authUser } from './units';
import { Auth } from './types';

export interface WithSender {
	readonly sender: Address;
}

export const attachWithSender = <Params extends WithSender, Done, Fail = Error>(
	effect: Effect<Params, Done, Fail>
) => {
	return attach<
		Omit<Params, keyof WithSender>,
		Store<Auth | null>,
		Effect<Params, Done, Fail>
	>({
		source: $authUser,
		effect,
		mapParams: (params, user) =>
			({
				...params,
				sender: user?.login ?? '',
			} as Params),
	});
};
