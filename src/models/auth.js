/*
state {
  isLogin: boolean;
  address: string | null;
}
*/
import { lockApi, loginApi, registrationApi, unlockApi } from "../api";
export const SET_ADDRESS = "transfer/auth/SET_ADDRESS";
export const LOGIN = "transfer/auth/LOGIN";
export const LOGOUT = "transfer/auth/LOGOUT";

const initialState = {
	isLogin: false,
	address: null,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ADDRESS: {
			return {
				...state,
				address: action.payload.address,
			};
		}
		case LOGIN: {
			return {
				...state,
				isLogin: true,
			};
		}
		case LOGOUT: {
			return {
				...state,
				isLogin: false,
			};
		}
		default: {
			return state;
		}
	}
};

export const setAddressAC = (address) => {
	return {
		type: SET_ADDRESS,
		payload: {
			address,
		},
	};
};

export const loginAC = () => {
	return {
		type: LOGIN,
	};
};

export const logoutAC = () => {
	return {
		type: LOGOUT,
	};
};

export const registrationThunk = (address) => {
	return async (dispatch) => {
		try {
			await unlockApi(address);
			debugger;

			await registrationApi(address);
			dispatch(setAddressAC(address));

			return true;
		} catch (e) {
			debugger;

			console.log(e);

			return false;
		}
	};
};

export const loginThunk = (address) => {
	return async (dispatch) => {
		try {
			await unlockApi(address);
			await loginApi(address);
			dispatch(setAddressAC(address));
			dispatch(loginAC());
			return true;
		} catch (e) {
			console.log(e);
		}
	};
};

export const logoutThunk = () => {
	return async (dispatch, getState) => {
		try {
			const { address } = getState().auth;
			await lockApi(address);
			dispatch(logoutAC());
		} catch (e) {
			console.log(e);
		}
	};
};
