import { MenuItem } from '@mui/material';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { Field, FieldProps } from '@/shared/ui';
import { useAddresses } from '../../lib';

export type AddressesSelectProps = CommonProps & FieldProps;

export const AddressesSelect: React.FC<AddressesSelectProps> = (props) => {
	const { data: addresses, } = useAddresses();

	return (
		<Field {...props} select>
			{addresses.map((address) => (
				<MenuItem value={address} key={address}>
					{address}
				</MenuItem>
			))}
		</Field>
	);
};
