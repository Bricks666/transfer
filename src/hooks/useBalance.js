import { useSelector } from "react-redux";

export const useBalance = () => {
	return useSelector((state) => state.auth.balance);
};
