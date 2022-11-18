/*
state: {
  isLoading: boolean
  list: Vote[]
}

Vote {
  id: number;
  candidate: string;
  voters: string[]
  against: string;
  isFinish: boolean
}
*/

import { getVotesApi, voteAgainstApi, voteForApi } from '../api';
import { toValidVote } from '../utils';

export const SET_VOTES = 'transfer/votes/SET_VOTES';
export const TOGGLE_LOADING = 'transfer/votes/TOGGLE_LOADING';
export const VOTE = 'transfer/votes/VOTE';

const initialState = {
	isLoading: false,
	list: [],
};

const vote = (votes, voteId, voter, isAgainst) => {
	return votes.map((vote) =>
		vote.id === voteId
			? {
					...vote,
					voters: isAgainst ? vote.voters : [...vote.voters, voter],
					against: isAgainst ? voter : vote.isAgainst,
					isFinish: isAgainst,
			  }
			: vote
	);
};

export const votesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_VOTES: {
			return {
				...state,
				list: action.payload.votes,
			};
		}
		case TOGGLE_LOADING: {
			return {
				...state,
				isLoading: action.payload.isLoading,
			};
		}
		case VOTE: {
			const { voter, isAgainst, voteId } = action.payload;
			return {
				...state,
				list: vote(state.votes, voteId, voter, isAgainst),
			};
		}
		default: {
			return state;
		}
	}
};

export const setVotesAC = (votes) => {
	return {
		type: SET_VOTES,
		payload: {
			votes,
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
export const voteAC = (voteId, voter, isAgainst) => {
	return {
		type: VOTE,
		payload: {
			voteId,
			voter,
			isAgainst,
		},
	};
};

export const loadVotesThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(toggleLoadingAC(true));
			const votes = await getVotesApi();
			debugger;
			dispatch(setVotesAC(votes.map(toValidVote)));
		} catch (e) {
			console.log(e);
		} finally {
			dispatch(toggleLoadingAC(false));
		}
	};
};

export const voteForThunk = (voteId) => {
	return async (dispatch, getState) => {
		try {
			const { address } = getState().auth;
			await voteForApi(address, voteId);
			dispatch(voteAC(voteId, address, false));
		} catch (e) {
			console.log(e);
		}
	};
};

export const voteAgainstThunk = (voteId) => {
	return async (dispatch, getState) => {
		try {
			const { address } = getState().auth;
			debugger;
			await voteAgainstApi(address, voteId);
			dispatch(voteAC(voteId, address, true));
		} catch (e) {
			console.log(e);
		}
	};
};
