import type { Effect, Event } from 'effector';

export type VoidFunction = () => void;

export type ExtractValueType<T extends Record<any, any>> = T extends Record<
	any,
	infer R
>
	? R
	: never;

export type ExtractKeyType<T extends Record<any, any>> = T extends Record<
	infer R,
	any
>
	? R
	: never;

export interface ChainRouteOptions {
	readonly otherwise?: Effect<void, any, any> | Event<void>;
}

export type FieldsWithNullable<
	T extends Record<string, any>,
	Keys extends keyof T
> = {
	[Key in keyof T]: Keys extends Key ? T[Key] | null : T[Key];
};
