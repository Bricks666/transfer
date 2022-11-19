import { contract } from '.';

const getUserAddresses = async () => {
	return contract.methods.get_user_addresses().call();
};

export const getUsersApi = async () => {
	const users = [];
	const addresses = await getUserAddresses();
	addresses.forEach((address) =>
		users.push(contract.methods.user(address).call())
	);

	return Promise.all(users);
};

export const setUserOnOfferApi = async (sender, login) => {
	return contract.methods.add_offer_admin(login).send({ from: sender });
};
