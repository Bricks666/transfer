export const toValidUser = (userResponse) => {
	return {
		login: userResponse.login,
		user: userResponse.user,
		admin: userResponse.admin,
		onOffer: userResponse.on_offer,
	};
};
