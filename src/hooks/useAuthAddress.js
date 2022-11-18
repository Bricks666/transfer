import { useSelector } from 'react-redux';

export const useAuthAddress = () => {
	return useSelector((state) => state.auth.address);
};
