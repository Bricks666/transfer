import { useCallback, useMemo } from 'react';
import type {
	CombinePickerProps,
	MultiplePickerProps,
	SinglePickerProps
} from '../types';

interface BaseUsePreparePickerConfig<Label, Stored> {
	readonly options: Label[];
	readonly mapBeforeChange?: (value: Label) => Stored;
}

type UsePrepareSinglePickerConfig<Label, Stored> = {
	readonly isSelected: (value: Label, selected: Stored | null) => boolean;
	readonly multiple?: false;
};

type UsePrepareMultiplePickerConfig<Label, Stored> = {
	readonly isSelected: (value: Label, selected: Stored[]) => boolean;
	readonly multiple: true;
};

type UsePreparePickerConfig<Label, Stored> = Omit<
	CombinePickerProps<Stored>,
	'limitTags'
> &
	BaseUsePreparePickerConfig<Label, Stored> &
	(
		| UsePrepareSinglePickerConfig<Label, Stored>
		| UsePrepareMultiplePickerConfig<Label, Stored>
	);

export function usePreparePicker<Label, Stored>(
	config: UsePreparePickerConfig<Label, Stored>
) {
	const {
		multiple,
		isSelected,
		onChange,
		options,
		value,
		mapBeforeChange = stubMapBeforeChange,
	} = config;

	const changeHandler = useCallback(
		(_: unknown, value: Label[] | Label | null) => {
			if (!onChange) {
				return;
			}

			if (Array.isArray(value)) {
				return (
					onChange as NonNullable<MultiplePickerProps<Stored>['onChange']>
				)(value.map(mapBeforeChange));
			}

			return (onChange as NonNullable<SinglePickerProps<Stored>['onChange']>)(
				value ? mapBeforeChange(value) : null
			);
		},
		[]
	);

	const selected = useMemo(() => {
		if (multiple) {
			return options.filter((option) =>
				isSelected(option, (value ?? []) as Stored[])
			);
		}

		return (
			options.find((option) => isSelected(option, value ?? (null as any))) ??
			null
		);
	}, [multiple, options, value]);

	return {
		onChange: changeHandler,
		value: selected,
		multiple: multiple ?? false,
	} as const;
}

const stubMapBeforeChange = <Label, Stored>(value: Label): Stored =>
	value as unknown as Stored;
