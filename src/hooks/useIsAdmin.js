import { useUserInfo } from ".";

export const useIsAdmin = () => {
	const { admin } = useUserInfo();

	return admin;
};
