import { useCallback, useMemo } from 'react';
import { MultiplePickerProps, PickerProps, SinglePickerProps } from '../types';

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
	PickerProps<Stored>,
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
			if (Array.isArray(value)) {
				return (onChange as MultiplePickerProps<Stored>['onChange'])(
					value.map(mapBeforeChange)
				);
			}

			return (onChange as SinglePickerProps<Stored>['onChange'])(
				value ? mapBeforeChange(value) : null
			);
		},
		[]
	);

	const selected = useMemo(() => {
		return options.find((option) => isSelected(option, value as any)) ?? null;
	}, [multiple, options, value]);

	return {
		onChange: changeHandler,
		value: selected,
		multiple,
	} as const;
}

const stubMapBeforeChange = <Label, Stored>(value: Label): Stored =>
	value as unknown as Stored;
