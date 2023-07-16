import { useUnit } from 'effector-react';
import * as React from 'react';
import { AddressesSearch, AddressesSearchProps } from '@/shared/ui';
import { addressesModel } from '../../model';

export type Web3AddressesSearchProps = Omit<
	AddressesSearchProps,
	'addresses' | 'pending'
>;

export const Web3AddressesSearch: React.FC<Web3AddressesSearchProps> = (
	props
) => {
	const addresses = useUnit(addressesModel.query);

	return (
		<AddressesSearch
			{...(props as any)}
			addresses={addresses.data}
			pending={addresses.pending}
		/>
	);
};
