/*
state {
  isInitialling: boolean;
}
*/
import { initApi } from '../api';

export const TOGGLE_INIT = 'transfer/core/TOGGLE_INIT';

const initialState = {
	isInitialling: true,
};

export const coreReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_INIT: {
			return {
				...state,
				isInitialling: action.payload.isInitialling,
			};
		}
		default: {
			return state;
		}
	}
};

export const toggleInitAC = (isInitialling) => {
	return {
		type: TOGGLE_INIT,
		payload: {
			isInitialling,
		},
	};
};

export const initThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(toggleInitAC(true));
			initApi();
			dispatch(toggleInitAC(false));
		} catch (e) {
			console.log(e);
		}
	};
};
