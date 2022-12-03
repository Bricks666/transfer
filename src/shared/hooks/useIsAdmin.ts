import { useStoreMap } from 'effector-react';
import { Roles } from '@/shared/types';
import { authModel } from '@/shared/models';

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
