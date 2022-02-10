export const getUserRole = (user, admin, onOffer) => {
	if (onOffer) {
		return "Candidate to admin";
	}
	if (admin) {
		return "admin";
	}
	if (user) {
		return "User";
	}
};
