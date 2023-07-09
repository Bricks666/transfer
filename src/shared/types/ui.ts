import { ReactNode } from 'react';
import { FieldProps } from '../ui';

export interface CommonProps {
	className?: string;
}

export interface BasePopupProps extends CommonProps {
	readonly isOpen: boolean;
}

export interface SinglePickerProps<T> {
	readonly value?: T | null;
	readonly onChange?: (value: T | null) => unknown;
	readonly multiple?: false;
	readonly limitTags?: never;
}

export interface MultiplePickerProps<T> {
	readonly value?: T[];
	readonly onChange?: (value: T[]) => unknown;
	readonly multiple: true;
	readonly limitTags?: number;
}

export type CombinePickerProps<T> =
	| SinglePickerProps<T>
	| MultiplePickerProps<T>;

export type PickerProps<T> = CombinePickerProps<T> &
	Omit<FieldProps, keyof CombinePickerProps<T> | 'select' | 'multiline'> & {
		readonly readOnly?: boolean;
		readonly disableClearable?: boolean;
	};

export type Slots<Keys extends string> = {
	[Key in Keys]?: NonNullable<ReactNode> | null;
};
