import { useStoreMap } from 'effector-react';
import { Roles } from '@/models';
import { $authUser } from '@/models/auth/units';

export const useIsAdmin = () => {
	return useStoreMap({
		store: $authUser,
		fn: (user) => {
			debugger;
			return !!user && user.role == Roles.admin;
		},
		keys: [],
		defaultValue: false,
	});
};
