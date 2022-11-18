export const toValidVote = (vote) => {
	return {
		id: vote.id,
		candidate: vote.admin_request,
		voters: vote.admin_address,
		against: vote.admin_against,
		isFinish: vote.finished,
	};
};
