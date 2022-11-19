import { contract } from '.';

export const getVotesApi = async () => {
	return contract.methods.get_offers().call();
};

export const voteForApi = async (sender, voteId) => {
	console.log(voteId);
	return contract.methods.vote_for(voteId).send({ from: sender });
};

export const voteAgainstApi = async (sender, voteId) => {
	return contract.methods.vote_against(voteId).send({ from: sender });
};
