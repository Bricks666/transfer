/*
state {
  isLogin: boolean;
  address: string | null;
}
*/
import {
	getBalanceApi,
	lockApi,
	loginApi,
	registrationApi,
	unlockApi,
} from "../api";
export const SET_ADDRESS = "transfer/auth/SET_ADDRESS";
export const LOGIN = "transfer/auth/LOGIN";
export const LOGOUT = "transfer/auth/LOGOUT";
export const SET_BALANCE = "transfer/auth/SET_BALANCE";
export const SET_INTERVAL_ID = "transfer/auth/SET_INTERVAL_ID";

const initialState = {
	isLogin: false,
	address: null,
	balance: 0,
	intervalId: null,
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
      debugger
			clearInterval(state.intervalId);
			return {
				...state,
				isLogin: false,
				intervalId: null,
			};
		}
		case SET_BALANCE: {
			return { ...state, balance: action.payload.balance };
		}
		case SET_INTERVAL_ID: {
			return {
				...state,
				intervalId: action.payload.intervalId,
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

export const setBalanceAC = (balance) => {
	return {
		type: SET_BALANCE,
		payload: {
			balance,
		},
	};
};

export const setIntervalIdAC = (intervalId) => {
	return {
		type: SET_INTERVAL_ID,
		payload: {
			intervalId,
		},
	};
};

export const registrationThunk = (address) => {
	return async (dispatch) => {
		try {
			await unlockApi(address);


			await registrationApi(address);
			dispatch(setAddressAC(address));

			return true;
		} catch (e) {


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

			const intervalId = setInterval(async () => {
				const balance = await getBalanceApi(address);
				dispatch(setBalanceAC(balance / 10 ** 18));
			}, 500);

			dispatch(setIntervalIdAC(intervalId));

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
