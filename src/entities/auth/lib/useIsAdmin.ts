import { useStoreMap } from 'effector-react';
import { Roles } from '@/shared/types';
import { $role } from '../model';

export const useIsAdmin = () => {
	return useStoreMap({
		store: $role,
		fn: (role) => {
			return role === Roles.admin;
		},
		keys: [],
		defaultValue: false,
	});
};
