import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { useAddresses } from '../../lib';

export interface AddressesSelectProps
	extends CommonProps,
		React.SelectHTMLAttributes<HTMLSelectElement> {
	readonly label?: string;
}

export const AddressesSelect: React.FC<AddressesSelectProps> = (props) => {
	const { label, ...rest } = props;
	const { data: addresses, } = useAddresses();
	const inputId = React.useId();

	return (
		<div>
			{label ? <label htmlFor={inputId}>{label}</label> : null}
			<select {...rest} id={inputId}>
				{addresses.map((address) => (
					<option value={address} key={address}>
						{address}
					</option>
				))}
			</select>
		</div>
	);
};
