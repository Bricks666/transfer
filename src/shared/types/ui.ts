export interface CommonProps {
	className?: string;
}

export interface BasePopupProps extends CommonProps {
	readonly isOpen: boolean;
}

export interface SinglePickerProps<T> {
	readonly value: T | null;
	readonly onChange: (value: T | null) => unknown;
	readonly multiple?: false;
	readonly limitTags?: never;
}

export interface MultiplePickerProps<T> {
	readonly value: T[];
	readonly onChange: (value: T[]) => unknown;
	readonly multiple: true;
	readonly limitTags?: number;
}

export type PickerProps<T> = SinglePickerProps<T> | MultiplePickerProps<T>;
