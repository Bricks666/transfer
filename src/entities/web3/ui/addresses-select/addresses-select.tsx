import { MenuItem } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { Field, FieldProps } from '@/shared/ui';
import { addressesModel } from '../../model';

export type AddressesSelectProps = CommonProps & FieldProps;

export const AddressesSelect: React.FC<AddressesSelectProps> = (props) => {
	const addresses = useUnit(addressesModel.query);

	return (
		<Field {...props} disabled={addresses.pending} select>
			{addresses.data.map((address) => (
				<MenuItem value={address} key={address}>
					{address}
				</MenuItem>
			))}
		</Field>
	);
};
