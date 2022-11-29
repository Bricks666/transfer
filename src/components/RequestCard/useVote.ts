import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { voteAgainstThunk, voteForThunk } from '../../../models/requests';

export const useVote = (voteId) => {
	const dispatch = useDispatch();

	const voteFor = useCallback(
		() => dispatch(voteForThunk(voteId)),
		[voteId, dispatch]
	);
	const voteAgainst = useCallback(
		() => dispatch(voteAgainstThunk(voteId)),
		[voteId, dispatch]
	);

	return {
		voteFor,
		voteAgainst,
	};
};
