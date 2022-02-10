import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserThunk } from "../models/user";

export const useUserInfo = () => {
	const user = useSelector((state) => state.user.info);
	const authAddress = useSelector((state) => state.auth.address);

	const dispatch = useDispatch();

	useEffect(() => {
		if (user.login !== authAddress) {
			dispatch(loadUserThunk());
		}
	}, [user.login, dispatch, authAddress]);

	return user;
};
