import { useStoreMap } from 'effector-react';
import { authModel } from '@/models';

export const useAuthAddress = () => {
	return useStoreMap({
		store: authModel.$authUser,
		fn: (user) => user?.login,
		keys: [],
		defaultValue: null,
	});
};
