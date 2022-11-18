/*
state: {
  info: {
    login: string;
    user: boolean;
    admin: boolean
    onOffer: boolean
  }
  isLoading: boolean
}
*/
import { getUserApi } from '../api';
import { toValidUser } from '../utils';

export const SET_USER = 'transfer/user/SET_USER';
export const TOGGLE_LOADING = 'transfer/user/TOGGLE_LOADING';

const initialState = {
	info: {
		login: null,
		user: false,
		admin: false,
		onOffer: false,
	},
	isLoading: false,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER: {
			return {
				...state,
				info: action.payload.info,
			};
		}
		case TOGGLE_LOADING: {
			return {
				...state,
				isLoading: action.payload.isLoading,
			};
		}
		default: {
			return state;
		}
	}
};

export const setUserAC = (info) => {
	return {
		type: SET_USER,
		payload: {
			info,
		},
	};
};

export const toggleLoadingAC = (isLoading) => {
	return {
		type: TOGGLE_LOADING,
		payload: {
			isLoading,
		},
	};
};

export const loadUserThunk = () => {
	return async (dispatch, getState) => {
		try {
			const { address } = getState().auth;
			dispatch(toggleLoadingAC(true));
			const user = await getUserApi(address);

			dispatch(setUserAC(toValidUser(user)));
			dispatch(toggleLoadingAC(false));
		} catch (e) {
			console.log(e);
		}
	};
};
