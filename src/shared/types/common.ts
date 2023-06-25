import { RouteParams, RouteParamsAndQuery } from 'atomic-router';
import { Effect, Event } from 'effector';

export type VoidFunction = () => void;

export type Callback<P, R> = (params: P) => R;

export type ExtractValueType<T extends Record<any, any>> = T extends Record<
	any,
	infer R
>
	? R
	: never;

export interface ChainRouteOptions<Params extends RouteParams> {
	readonly otherwise?:
		| Effect<RouteParamsAndQuery<Params>, any, any>
		| Event<RouteParamsAndQuery<Params>>;
}
