import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAddressesThunk } from '../models/addresses';

export const useAddresses = () => {
	const addresses = useSelector((state) => state.addresses);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!addresses.length) {
			dispatch(loadAddressesThunk());
		}
	}, [dispatch, addresses.length]);

	return addresses;
};
