import { loadAddressesApi } from "../api";

export const SET_ADDRESSES = "transfer/addresses/SET_ADDRESSES";

export const addressesReducer = (state = [], action) => {
	switch (action.type) {
		case SET_ADDRESSES: {
			return action.payload.addresses;
		}
		default: {
			return state;
		}
	}
};

export const setAddressesAC = (addresses) => {
	return {
		type: SET_ADDRESSES,
		payload: {
			addresses,
		},
	};
};

export const loadAddressesThunk = () => {
	return async (dispatch) => {
		try {
			const addresses = await loadAddressesApi();

			dispatch(setAddressesAC(addresses));
		} catch (e) {
			console.log(e);
		}
	};
};
