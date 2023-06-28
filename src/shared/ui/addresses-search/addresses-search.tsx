import { Autocomplete, InputAdornment } from '@mui/material';
import * as React from 'react';
import type { Address } from 'web3';
import { usePreparePicker } from '@/shared/lib';
import type { CommonProps, PickerProps } from '@/shared/types';
import { Field, type FieldProps } from '@/shared/ui';

export type AddressesSearchProps = CommonProps &
	Omit<FieldProps, 'value' | 'onChange' | 'multiline' | 'select'> &
	PickerProps<string> & {
		readonly addresses: Address[];
		readonly pending: boolean;
	};

export const AddressesSearch: React.FC<AddressesSearchProps> = (props) => {
	const {
		onChange,
		value,
		multiple,
		limitTags,
		className,
		addresses,
		pending,
		...rest
	} = props;

	const options = usePreparePicker({
		options: addresses,
		isSelected,
		onChange,
		value,
		multiple,
	});

	return (
		<Autocomplete
			className={className}
			options={addresses}
			loading={pending}
			getOptionLabel={removeHexBegin}
			renderInput={(params) => {
				return (
					<Field
						{...rest}
						{...params}
						InputProps={{
							...rest.InputProps,
							...params.InputProps,
							startAdornment: (
								<InputAdornment position='start'>0x</InputAdornment>
							),
						}}
					/>
				);
			}}
			limitTags={limitTags}
			{...(options as any)}
		/>
	);
};

const removeHexBegin = (address: Address): string => {
	return address.replace('0x', '');
};

const isSelected = (
	value: string,
	address: Address | Address[] | null
): boolean => {
	if (Array.isArray(address)) {
		return address.includes(value);
	}
	return !!value && address === value;
};
