/*
state: {
  isLoading: boolean;
  list: Sample[]
}

Sample {
  categoryId: number;
  name: string;
  moneyCount: number
}
*/

import { addSampleApi, getSamplesApi } from "../api";
import { toValidSample } from "../utils";

export const SET_SAMPLES = "transfer/samples/SET_SAMPLES";
export const TOGGLE_LOADING = "transfer/samples/TOGGLE_LOADING";

const initialState = {
	isLoading: false,
	list: [],
};

export const samplesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SAMPLES: {
			return {
				...state,
				list: action.payload.samples,
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

export const setSamplesAC = (samples) => {
	return {
		type: SET_SAMPLES,
		payload: {
			samples,
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

export const loadSamplesThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(toggleLoadingAC(true));
			const samples = await getSamplesApi();
			dispatch(setSamplesAC(samples.map(toValidSample)));
		} catch (e) {
			console.log(e);
		} finally {
			dispatch(toggleLoadingAC(false));
		}
	};
};

export const addSampleThunk = (name, categoryId, moneyCount) => {
	return async (dispatch, getState) => {
		try {
			const { address } = getState().auth;
			await addSampleApi(address, name, categoryId, moneyCount);
		} catch (e) {
			console.log(e);
		}
	};
};
