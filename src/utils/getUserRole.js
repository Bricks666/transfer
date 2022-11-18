export const getUserRole = (user, admin, onOffer) => {
	if (admin) {
		return 'admin';
	}
	if (onOffer) {
		return 'Candidate to admin';
	}
	if (user) {
		return 'User';
	}
};
