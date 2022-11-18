import { useMemo } from 'react';
import { useAddresses, useAuthAddress } from '.';

export const useOthersAddresses = () => {
	const authAddress = useAuthAddress();
	const addresses = useAddresses();

	return useMemo(
		() => addresses.filter((address) => address !== authAddress),
		[addresses, authAddress]
	);
};
