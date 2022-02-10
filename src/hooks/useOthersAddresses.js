import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useAddresses } from ".";

export const useOthersAddresses = () => {
	const authAddress = useSelector((state) => state.auth.address);
	const addresses = useAddresses();

	return useMemo(
		() => addresses.filter((address) => address !== authAddress),
		[addresses, authAddress]
	);
};
