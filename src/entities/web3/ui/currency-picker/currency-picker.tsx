import { Autocomplete } from '@mui/material';
import * as React from 'react';
import {
	ETHER_UNITS_MAP,
	UsingEtherUnits,
	usePreparePicker
} from '@/shared/lib';
import type { PickerProps } from '@/shared/types';
import { Field } from '@/shared/ui';

export type CurrencyPickerProps = PickerProps<UsingEtherUnits>;

export const CurrencyPicker: React.FC<CurrencyPickerProps> = (props) => {
	const {
		value,
		multiple,
		onChange,
		limitTags,
		readOnly,
		className,
		disabled,
		disableClearable,
		...rest
	} = props;

	const pickerOptions = usePreparePicker({
		options,
		isSelected,
		mapBeforeChange,
		onChange,
		multiple,
		value,
	});

	return (
		<Autocomplete
			className={className}
			options={options}
			getOptionLabel={getOptionLabel}
			renderInput={(params) => {
				return (
					<Field
						{...params}
						{...rest}
						InputProps={{ ...params.InputProps, ...rest.InputProps, }}
					/>
				);
			}}
			{...pickerOptions}
			disableClearable={disableClearable}
			readOnly={readOnly}
			disabled={disabled}
			limitTags={limitTags}
		/>
	);
};
interface Option {
	readonly key: UsingEtherUnits;
	readonly value: string;
}

const options = Object.entries(ETHER_UNITS_MAP).map(([key, value]) => ({
	key,
	value,
})) as Option[];

const getOptionLabel = (pair: Option): string => {
	return pair.value;
};

const isSelected = (
	value: Option,
	selected: UsingEtherUnits | UsingEtherUnits[] | null
): boolean => {
	if (Array.isArray(selected)) {
		return selected.includes(value.key);
	}

	return selected === value.key;
};

const mapBeforeChange = (value: Option): UsingEtherUnits => {
	return value.key;
};
