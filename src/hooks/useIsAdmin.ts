import { useStoreMap } from 'effector-react';
import { Roles } from '@/types';
import { authModel } from '@/models';

export const useIsAdmin = () => {
	return useStoreMap({
		store: authModel.$role,
		fn: (role) => {
			return role === Roles.admin;
		},
		keys: [],
		defaultValue: false,
	});
};
